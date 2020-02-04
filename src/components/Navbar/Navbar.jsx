import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  const activeLink = { color: 'rgba(230, 230, 230, 0.5)' };
  return (
    <nav className="main-nav">
      <div className="nav-brand">
        <Link to="/" className="nav-brand">
          <h1>Rappi Makers</h1>
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeStyle={activeLink} exact>
            Inicio
          </NavLink>
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
          <NavLink to="signin" className="nav-link" activeStyle={activeLink}>
            Sign In
          </NavLink>
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
