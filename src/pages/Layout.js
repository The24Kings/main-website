import React from 'react'

import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {

  const location = useLocation();

  return (
    <div>
      <div className="top-bar">
        <nav className="header">
          <ul className="nav">
            <li id="nav-item"><Link to="/" className={location.pathname === "/" ? "active" : null}>Home</Link></li>
            <li id="nav-item"><Link to="/about" className={location.pathname === "/about" ? "active" : null}>About</Link> </li>
            <li id="nav-item"><Link to="/contact" className={location.pathname === "/contact" ? "active" : null}>Contact</Link></li>

            <img id="logo" src={require("../content/Logo.png")} alt="A logo for 24KingsUnite"/>
          </ul>
        </nav>
      </div>
      
      <Outlet />
    </div>
  )
};

export default Layout;