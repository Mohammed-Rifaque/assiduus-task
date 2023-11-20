import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import CheckAccountChart from './CheckAccountChart';
import InvoiceChart from './InvoiceChart';
import CashFlowChart from './CashFlowChart';
import AccountWatchlist from './AccountWatchlist';

/**
 * @param {Number} length 
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number[]} Array of random numbers between 0 and max int for the given length. 
 */
function getRandomArrayOfNumber(length, min, max) {
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

/**
 * @returns {Object[]} Array of random objects of monthly product sale
 */
function getRandomDataForCashFlow() {
  const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function getRandomMonths(numMonths) {
    const shuffledMonths = months.sort(() => Math.random() - 0.5);
    return shuffledMonths.slice(0, numMonths);
  }
  let randomMonths = getRandomMonths(6)
  // random number from 1000 to 5000
  // Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000

  // random number from 0 to 5000
  // Math.floor(Math.random() * 5000)
  return randomMonths.map((val) => ({ month: val, product1: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000, product2: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000 }))
}

const Dashboard = () => {
  const [randomKey, setRandomKey] = useState(0);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [randomDataForCheckAccount, setRandomDataForCheckAccount] = useState(getRandomArrayOfNumber(10, 1, 100));
  const [randomDataForInvoiceChart, setRandomDataForInvoiceChart] = useState(getRandomArrayOfNumber(6, 1, 12));
  const [randomDataForCashFlow, setRandomDataForCashFlow] = useState(getRandomDataForCashFlow());


  const handleRandomize = () => {
    setRandomDataForCheckAccount(getRandomArrayOfNumber(10, 1, 100));
    setRandomDataForInvoiceChart(getRandomArrayOfNumber(6, 1, 12));
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
            <CheckAccountChart key={randomKey} randomData={randomDataForCheckAccount} />
          </div>
          <div className='card'>
            <InvoiceChart setShowUploadPopup={setShowUploadPopup} randomData={randomDataForInvoiceChart} />
          </div>
          <div className='card'>
            <CashFlowChart randomData={randomDataForCashFlow} />
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
