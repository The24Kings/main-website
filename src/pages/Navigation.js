import React from 'react'

import { Link, useLocation } from "react-router";

const Navigation = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className="nav-container">
        <div className="pfp">
          <img id="image" src="https://isoptera.lcsc.edu/~rjziegler/pictures/Logo.jpg" onClick={() => window.open("https://github.com/The24Kings")} title="Github" alt="Profile Picture"/>
        </div>

        <div id="info">
          <h1>Riley Ziegler</h1>
          <h5 title="Github"><a onClick={() => window.open("https://github.com/The24Kings")}>SOFTWARE DEVELOPER</a></h5>
        </div>

        <div id="nav">
          <ul id="nav-list">
            <li id="nav-item"><Link to="/" className={location.pathname === "/" ? "active" : null}>Home</Link></li>
            <li id="nav-item"><Link to="/about" className={location.pathname === "/about" ? "active" : null}>About</Link> </li>
            <li id="nav-item"><Link to="/projects" className={location.pathname === "/blog" ? "active" : null}>Projects</Link></li>
            <li id="nav-item"><Link to="/contact" className={location.pathname === "/contact" ? "active" : null}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Navigation;