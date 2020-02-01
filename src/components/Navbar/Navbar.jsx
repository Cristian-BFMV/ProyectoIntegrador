import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="nav-brand">
        <h1>Rappi Makers</h1>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="ww.google.com" className="nav-link">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a href="www.google.com" className="nav-link">
            Ofertas
          </a>
        </li>
        <li className="nav-item">
          <a href="www.google.com" className="nav-link">
            Rappi Aliados
          </a>
        </li>
        <li className="nav-item">
          <a href="www.google.com" className="nav-link">
            Sign In
          </a>
        </li>
        <li className="nav-item">
          <a href="www.google.com" className="nav-link">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
