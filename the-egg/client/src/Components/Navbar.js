import logo from "../images/logo.png";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to ="/"><img src={logo} alt="Logo" className="logo" /></Link>
      </div>
      <ul className={`links ${showMenu ? 'show' : ''}`}>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/locations">Locations</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${showMenu ? 'change' : ''}`}></div>
        <div className={`bar ${showMenu ? 'change' : ''}`}></div>
        <div className={`bar ${showMenu ? 'change' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
