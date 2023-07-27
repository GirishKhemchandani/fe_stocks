import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import StockForm from "./components/StockForm";
import StockData from "./components/StockData";
import NavBar from "./components/NavBar";
// import './App.css';

function App() {
  const [stockData, setStockData] = useState(null);
  const history = useNavigate();

  // Callback function to receive data from StockForm component
  const handleDataReceived = (data) => {
    fetch("http://localhost:8000/api/fetchStockData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: data }),
    })
      .then((res) => res.json())
      .then((data) => {
        setStockData(data);
        history("/data"); // Redirect to /data route
      });
  };

  return (
    <div>
    
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <StockForm onDataReceived={handleDataReceived} />
              </>
            }
          />
          <Route path="/data" element={
            <>
            <NavBar />
            {/* <div style={{background:'black'}}> */}

          <StockData data={stockData} />
            {/* </div> */}
            </>
          } />
        </Routes>
      
    </div>
  );
}

export default App;
