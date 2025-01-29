import React from 'react'

import { Link, useLocation } from "react-router";

const Navigation = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className="nav-container">
        <div className="pfp">
          <img id="image" src={require("../content/Logo.jpg")} onClick={() => window.open("https://github.com/The24Kings")} alt="Profile Picture"/>
        </div>

        <div id="info">
          <h1>Riley Ziegler</h1>
          <h5><a onClick={() => window.open("https://github.com/The24Kings")}>SOFTWARE DEVELOPER</a></h5>
        </div>

        <div id="nav">
          <ul id="nav-list">
            <li id="nav-item"><Link to="/" className={location.pathname === "/" ? "active" : null}>Home</Link></li>
            <li id="nav-item"><Link to="/about" className={location.pathname === "/about" ? "active" : null}>About</Link> </li>
            <li id="nav-item"><Link to="/contact" className={location.pathname === "/contact" ? "active" : null}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Navigation;