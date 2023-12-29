import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="top-bar">
        <nav className="header">
          <ul className="nav">
            <li id="nav-item"><Link to="/">Home</Link></li>
            <li id="nav-item"><Link to="/about">About</Link> </li>
            <li id="nav-item"><Link to="/contact">Contact</Link></li>

            <img id="logo" src={require("../content/Logo.png")} alt="A logo for 24KingsUnite"/>
          </ul>
        </nav>
      </div>
      
      <Outlet />
    </div>
  )
};

export default Layout;