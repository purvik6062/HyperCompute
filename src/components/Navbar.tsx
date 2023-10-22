import React from "react";
import "../styles/Navbar.css"; // Import your CSS file for styling
import logo from "../assets/HyperCompute.png"; // Replace with the actual path to your logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="HyperCompute Logo" className="navbar-logo" />
        <span className="navbar-title">HyperCompute</span>
      </div>
      <div className="navbar-right">
        <button className="connect-wallet-button">Connect Wallet</button>
      </div>
    </nav>
  );
}

export default Navbar;
