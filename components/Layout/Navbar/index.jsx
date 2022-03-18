import React from "react";
import "./style.css";

const logo = "Arcodez";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">{logo}</div>
      <div className="options">navbar and options</div>
    </div>
  );
};

export default Navbar;
