import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/components/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">
          <div className="footer-section">
            <h3 className="footer-title">🛍️ FakeStore</h3>
            <p className="footer-text">
              Your one-stop shop for everything you need. 
              Quality products at affordable prices.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Customer Service</h4>
            <ul className="footer-links">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/terms">Terms & Privacy</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">📘</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">🐦</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">📸</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">💼</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 FakeStore. All rights reserved.</p>
          <p>Made with ❤️ for React beginners</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
