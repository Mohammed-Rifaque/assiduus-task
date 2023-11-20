import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function CashFlowChart({ randomData }) {
  const svgRef = useRef();

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();

    const data = randomData;
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = svg.attr("width") - margin.left - margin.right;
    const height = svg.attr("height") - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .domain(data.map(d => d.month))
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d3.sum(Object.keys(d).filter(key => key !== 'month'), key => d[key]))])
      .range([height, 0]);

    const z = d3.scaleOrdinal()
      .range(["#47B747", "#02BB7D"]);

    const stack = d3.stack()
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const series = stack.keys(Object.keys(data[0]).filter(key => key !== 'month'))(data);

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    g.selectAll(".serie")
      .data(series)
      .enter().append("g")
      .attr("fill", d => z(d.key))
      .selectAll("rect")
      .data(d => d)
      .enter().append("rect")
      .attr("x", d => x(d.data.month) + x.bandwidth() / 4)
      .attr("y", d => y(d[1]))
      .attr("height", d => y(d[0]) - y(d[1]))
      .attr("width", x.bandwidth() / 4)
      .attr("rx", 5)
      .attr("ry", 5)
      // .attr("rx", d => d3.max([0, y(d[0]) - y(d[1])]) === 0 ? 5 : 0) 
      // .attr("ry", d => d3.max([0, y(d[0]) - y(d[1])]) === 0 ? 0 : 5);
    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append("g")
      .call(d3.axisLeft(y).ticks(null, "s"))
      .append("text")
      .attr("x", 2)
      .attr("y", y(y.ticks().pop()) + 0.5)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
  }, [randomData]);

  return (
    <div className='total-cash-flow'>
      <div className='card-title'>
        <h2>Total cash flow</h2>
        <div className='in-out-btn-wrapper'>
          <div>
            <button className='button button-in'></button>
            <label className='button-label'>In</label>
          </div>
          <div>
            <button className='button button-out'></button>
            <label className='button-label'>Out</label>
          </div>
        </div>
      </div>
      <svg ref={svgRef} width="450" height="300"></svg>
    </div>
  );
}

export default CashFlowChart;
