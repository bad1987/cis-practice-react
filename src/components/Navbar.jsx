import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/components/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🛍️</span>
          <span className="logo-text">FakeStore</span>
        </Link>
        
        <div className="navbar-search">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>
        
        <div className="navbar-actions">
          <button className="nav-button">Login</button>
          <Link to="/cart" className="cart-button">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
