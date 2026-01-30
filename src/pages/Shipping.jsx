import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/pages/Shipping.css';

function Shipping() {
  return (
    <div className="shipping-page">
      <div className="shipping-container">
        <h1 className="shipping-title">Shipping Information 📦</h1>
        
        <section className="shipping-section">
          <h2>Delivery Options</h2>
          <div className="shipping-options">
            <div className="option-card">
              <span className="option-icon">🚚</span>
              <h3>Standard Shipping</h3>
              <p className="option-price">FREE</p>
              <p className="option-time">5-7 business days</p>
            </div>
            <div className="option-card">
              <span className="option-icon">✈️</span>
              <h3>Express Shipping</h3>
              <p className="option-price">$9.99</p>
              <p className="option-time">2-3 business days</p>
            </div>
            <div className="option-card">
              <span className="option-icon">⚡</span>
              <h3>Next Day Delivery</h3>
              <p className="option-price">$19.99</p>
              <p className="option-time">1 business day</p>
            </div>
          </div>
        </section>

        <section className="shipping-section">
          <h2>Shipping Policy</h2>
          <ul className="policy-list">
            <li>All orders are processed within 1-2 business days</li>
            <li>Free shipping on orders over $50</li>
            <li>Tracking information sent via email</li>
            <li>International shipping available to select countries</li>
            <li>Signature may be required for high-value orders</li>
          </ul>
        </section>

        <section className="shipping-section">
          <h2>Order Tracking</h2>
          <p className="tracking-text">
            Once your order ships, you'll receive an email with a tracking number. 
            You can use this number to track your package on our website or the carrier's site.
          </p>
        </section>

        <div className="shipping-cta">
          <Link to="/" className="cta-button">
            Continue Shopping →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
