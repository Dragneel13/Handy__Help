import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav>
      <div className="logo-box">
        {" "}
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>{" "}
        |
        <Link className="link" to="/jobs">
          Jobs
        </Link>{" "}
        |
        <Link className="link" to="/aboutus">
          About us
        </Link>{" "}
        |
        <Link className="link" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
