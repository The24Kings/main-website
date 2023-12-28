import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="header">
        <ul className="nav">
          <li id="nav-item"><Link to="/">Home</Link></li>
          <li id="nav-item"><Link to="/about">About</Link> </li>
          <li id="nav-item"><Link to="/contact">Contact</Link></li>
          <img id="logo" src="../content/24KingsUnite Logo.png" alt="A logo for 24KingsUnite"/>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;