import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { DropDown } from "./Dropdown";

function CheckAccount({ randomData }) { 
  const svgRef = useRef();
  const [dropDown1, setDropDown1] = useState({ open: false, text: "Manage" });
  const [dropDown2, setDropDown2] = useState({ open: false, text: "January" });

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove(); 
  
    const data = randomData; 
    const svg = d3.select(svgRef.current)
    const margin = 50;
    const width = svg.attr("width") - margin;
    const height = svg.attr("height") - margin;
    const xScale = d3.scaleLinear().domain([0, data.length]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height, 0]);
    const g = svg.append("g").attr("transform", "translate(" + margin + "," + margin + ")");
    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));
    const line = d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d))
      .curve(d3.curveBasis); 
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#02BB7D")
      .attr("stroke-width", 2)
      .attr("d", line);
  }, [randomData]);
  

  return (
    <div className='checking-account'>
      <div className='card-title'>
        <h2>Checking account</h2>
        <div className='dropdown-wrapper'>
          <DropDown dropDown={dropDown1} setDropDown={setDropDown1} />
          <DropDown dropDown={dropDown2} setDropDown={setDropDown2} />
        </div>
      </div>

      <svg ref={svgRef} width="420" height="350"></svg>
    </div>
  );
}

export default CheckAccount;
