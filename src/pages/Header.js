import React from 'react'

import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className="top-bar">
        <nav className="header">
          <ul className="nav">
            <li id="nav-item"><Link to="/" className={location.pathname === "/" ? "active" : null}>Home</Link></li>
            <li id="nav-item"><Link to="/about" className={location.pathname === "/about" ? "active" : null}>About</Link> </li>
            <li id="nav-item"><Link to="/contact" className={location.pathname === "/contact" ? "active" : null}>Contact</Link></li>

            <a title="GitHub" href="https://github.com/The24Kings"><img id="logo" src={require("../content/Logo.png")}/></a>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  )
};

export default Header;