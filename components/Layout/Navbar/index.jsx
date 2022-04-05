import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const logo = "Arcodez";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">{logo}</div>
      <div className="options">
        <div className="option">
          <Link to="/">Home</Link>
        </div>
        <div className="option">
          <Link to="/results">Results</Link>
        </div>

        <div className="option">
          <Link to="/login">Login</Link>
        </div>
        <div className="option">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
