import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <h1>Stock Screener</h1>
      <h1 className="myName">
        <a href="https://www.linkedin.com/in/girishkhemchandani/" target="_blank" rel="noopener noreferrer" className="temp">Developed by GirishK</a>
      </h1>
    </div>
  );
};

export default NavBar;
