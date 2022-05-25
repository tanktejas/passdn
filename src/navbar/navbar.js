import React from "react";
import "./navbar.css";
import logo from "../images/logo (1).png";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="left">
          <img src={logo} />
        </div>
        <div className="right">
          <h2>Welcome to,</h2>
          <h3>Barber Shop</h3>
        </div>
      </div>
    </>
  );
}

export default Navbar;
