import React from "react";
import "../styles/Navbar.css"; // Import your CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-title">HyperCompute</span>
      </div>
      <div className="navbar-right">
        <button className="connect-wallet-button">Connect Wallet</button>
      </div>
    </nav>
  );
}

export default Navbar;
