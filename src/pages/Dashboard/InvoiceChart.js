import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Button, Modal, TextField, Box } from '@mui/material';

function InvoiceChart({ setShowUploadPopup, randomData }) {
  const svgRef = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();
    const data = randomData;
    const svg = d3.select(svgRef.current);
    const margin = 50;
    const width = svg.attr("width") - margin;
    const height = svg.attr("height") - margin;

    const xLabels = ['Older', 'Jan 01-08', 'Jan 09-16', 'Jan 17-24', 'Jan 25-31', 'Future'];

    const xScale = d3.scaleBand()
      .domain(xLabels)
      .range([0, width])
      .padding(0.7); 

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const g = svg.append("g")
      .attr("transform", `translate(${margin}, ${margin})`);

    g.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    g.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (value, index) => xScale(xLabels[index]))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", (value) => height - yScale(value))
      .attr("fill", "#47B747")
      .attr("rx", 5)
      .attr("ry", 5);
  }, [randomData]);

  const handleNewInvoiceClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = (upload) => {
    setOpenModal(false);
    if (upload) {
      console.log('Performing upload...');
      console.log('Invoice Number:', invoiceNumber);
      console.log('Amount:', amount);

      setInvoiceNumber('');
      setAmount('');
    }
    setShowUploadPopup(false);
  };

  return (
    <div className='invoices-owed'>
      <div className='card-title'>
        <h2>Invoices owed to you</h2>
        <Button
          sx={{ background: "#E6ECFD", color: "#98C2CB", textTransform: "initial" }}
          onClick={handleNewInvoiceClick}
        >
          New Sales Invoice
        </Button>
      </div>

      <svg ref={svgRef} width="400" height="350"></svg>

      {/* Modal */}
      <Modal open={openModal} onClose={() => handleCloseModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 8,
          }}
        >
          <h2 sx={{ marginBottom: 2 }}>Upload Sales Invoice</h2>
          <TextField
            label="Invoice Number"
            fullWidth
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Amount"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <div sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button onClick={() => handleCloseModal(false)} color="secondary">
              Cancel
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: '#47B747', color: 'white' }}
              onClick={() => handleCloseModal(true)}
            >
              Upload
            </Button>
          </div>
        </Box>
      </Modal>

    </div>
  );
}

export default InvoiceChart;
