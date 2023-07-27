

import React from "react";
import { Link } from "react-router-dom";
import "./StockData.css"; 

const StockData = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dataBox">
      {/* <h1>Stock Information</h1> */}
      <div className="container">
        <div className="row">
          <div className={`label open`}>Open :</div>
          <div className={`value open`}>{ data.o} USD</div>
        </div>
        <div className="row">
          <div className={`label close`}>Close :</div>
          <div className={`value close`}>{data.c} USD</div>
        </div>
        <div className="row">
          <div className={`label high`}>High :</div>
          <div className={`value high`}>{data.h} USD</div>
        </div>
        <div className="row">
          <div className={`label low`}>Low :</div>
          <div className={`value low`}>{data.l} USD</div>
        </div>
        <div className="row">
          <div className={`label volume`}>Volume :</div>
          <div className={`value volume`}>{data.v}</div>
        </div>
        <div className="home-button">
        <Link to="/">Home</Link>
      </div>
      </div>
            {/* Home button */}

    </div>
  );
};

export default StockData;
