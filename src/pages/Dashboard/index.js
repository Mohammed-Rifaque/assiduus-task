import React, { startTransition, useEffect, useRef, useState } from 'react';
import { Button, Modal } from '@mui/material';
import { ReactComponent as Arrow } from "../../assets/images/dropdown-arrow.svg";
import CheckAccountChart from './CheckAccountChart';
import InvoiceChart from './InvoiceChart';
import CashFlowChart from './CashFlowChart';
import AccountWatchlist from './AccountWatchlist';

// For CheckAccount component
function getRandomDataForCheckAccount(length, min, max) {
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

// For InvoiceChart component
function getRandomDataForInvoiceChart() {
  return [12, 5, 6, 6, 9, 10];
}

// For CashFlowChart component
function getRandomDataForCashFlow() {
  return [
    { month: "January", apples: Math.floor(Math.random() * 5000), bananas: Math.floor(Math.random() * 5000) },
    // { month: "February", apples: Math.floor(Math.random() * 5000), bananas: Math.floor(Math.random() * 5000) },
    // { month: "March", apples: Math.floor(Math.random() * 5000), bananas: Math.floor(Math.random() * 5000) },
    // { month: "April", apples: Math.floor(Math.random() * 5000), bananas: Math.floor(Math.random() * 5000) },
    // { month: "May", apples: Math.floor(Math.random() * 5000), bananas: Math.floor(Math.random() * 5000) },
    // { month: "June", apples: Math.floor(Math.random() * 5000), bananas: Math.floor(Math.random() * 5000) },
    // { month: "July", apples: Math.floor(Math.random() * 5000), bananas: Math.floor(Math.random() * 5000) },
    { month: "August", apples: Math.floor(Math.random() * 5000), bananas: Math.floor(Math.random() * 5000) },
    { month: "September", apples: Math.floor(Math.random() * 5000), bananas: Math.floor(Math.random() * 5000) },
    { month: "October", apples: Math.floor(Math.random() * 5000), bananas: Math.floor(Math.random() * 5000) },
    { month: "November", apples: Math.floor(Math.random() * 5000), bananas: Math.floor(Math.random() * 5000) },
    { month: "December", apples: Math.floor(Math.random() * 5000), bananas: Math.floor(Math.random() * 5000) }
  ];
}

const Dashboard = () => {
  const [randomKey, setRandomKey] = useState(0);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [randomDataForCheckAccount, setRandomDataForCheckAccount] = useState(getRandomDataForCheckAccount(10, 1, 100));
  const [randomDataForInvoiceChart, setRandomDataForInvoiceChart] = useState(getRandomDataForInvoiceChart());
  const [randomDataForCashFlow, setRandomDataForCashFlow] = useState(getRandomDataForCashFlow());


  const handleRandomize = () => {
    setRandomDataForCheckAccount(getRandomDataForCheckAccount(10, 1, 100));
    setRandomDataForInvoiceChart(getRandomDataForInvoiceChart());
    setRandomDataForCashFlow(getRandomDataForCashFlow());
  
    setRandomKey((prevKey) => prevKey + 1);
  };
  
  return (
    <div className='main-content dashboard'>
      <div className="top-bar">
        <Button onClick={handleRandomize}>Randomize Data</Button>
      </div>

      <div className="charts-wrapper">
        <div className="charts">
        <div className='card'>
        <CheckAccountChart key={randomKey}  randomData={randomDataForCheckAccount} />
      </div>
      <div className='card'>
        <CashFlowChart  randomData={randomDataForCashFlow} />
      </div>
    </div>
    <div className="charts">
      <div className='card'>
        <InvoiceChart setShowUploadPopup={setShowUploadPopup} randomData={randomDataForInvoiceChart} />
      </div>
      <div className='card'>
        <AccountWatchlist />
          </div>
        </div>
      </div>

      <Modal open={showUploadPopup} onClose={() => setShowUploadPopup(false)}>
        <div className="upload-popup">
          <h3>File Upload</h3>
          <Button onClick={() => setShowUploadPopup(false)}>Close</Button>
        </div>
      </Modal>
      {showUploadPopup && (
        <div className="popup">
          <button onClick={() => setShowUploadPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
