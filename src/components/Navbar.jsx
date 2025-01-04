import React from 'react';
import EELOGO from "../assets/EELOGO.png"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        {/* Placeholder for the logo */}
        <img src={EELOGO} alt="Logo" className="logo" />
        <span className="app-name">ELECTRICAL CODERS</span>
      </div>
    </div>
  );
};

export default Navbar;
