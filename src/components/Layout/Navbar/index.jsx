import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import "./style.scss";

const logo = "Arcodez";

const Navbar = () => {
  const { isAuth } = React.useContext(UserContext);

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
          <Link to="/stats">Statictics</Link>
        </div>

        <div className="option">
          <Link to={isAuth ? "/logout" : "/login"}>
            {isAuth ? "Logout" : "Login"}
          </Link>
        </div>
        <div className="option">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
