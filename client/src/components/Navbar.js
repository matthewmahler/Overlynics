import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/">Overlynics</NavLink>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/games">Games</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/graphs">Graphs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/stats">Stats</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar;