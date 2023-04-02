import logo from "../images/logo.png";
import { useState } from "react";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav>
      <div className="top-bar topbar-center-logo" id="topbar-center-logo">
        <div className="top-bar-left">
          <ul className={`menu vertical medium-horizontal ${isExpanded ? "expanded" : ""}`}>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/locations">Locations</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </div>
        <div className="top-bar-center">
          <a href="/"><img src={logo} className="eggLogo" alt="" /></a>
        </div>
        <button className="menu-icon" type="button" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
