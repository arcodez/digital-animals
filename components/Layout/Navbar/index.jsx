import React from "react";
import "./style.css";

const logo = "Arcodez";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">{logo}</div>
      <div className="options">
        <div className="option">Home</div>
        <div className="option">Results</div>

        <div className="option">Login</div>
        <div className="option">Register</div>
      </div>
    </div>
  );
};

export default Navbar;
