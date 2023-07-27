import React, { useState } from 'react';
import './StockForm.css'
// import './StockData.css'

const StockForm = ({onDataReceived}) => {
  const [symbol, setSymbol] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log('Submitted symbol:', symbol);
  //   console.log('Selected date:', selectedDate);
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const apiUrl = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/${selectedDate}/${selectedDate}?adjusted=true&sort=asc&limit=120&apiKey=pp1sG3mmuV_iShyKPySRBNFiHGZH4vio`;
      // const response = await axios.get(apiUrl);
      const data = {
        'symbol':symbol.toUpperCase(),
        'date':selectedDate
      };
      onDataReceived(data); // Propagate data to the parent component
      setSymbol('');
      setSelectedDate('');

    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };





  return (
    <div className='myBox'>

    <div >

    <form onSubmit={handleSubmit}>
      <label>
        Stock Symbol:
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter stock symbol"
          />
      </label>
      <br />
      <label>
        Select Date:
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
          </div>
  );
};

export default StockForm;
