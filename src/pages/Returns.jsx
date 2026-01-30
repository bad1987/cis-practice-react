import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/pages/Returns.css';

function Returns() {
  return (
    <div className="returns-page">
      <div className="returns-container">
        <h1 className="returns-title">Returns & Refunds 🔄</h1>
        
        <section className="returns-section highlight">
          <div className="highlight-box">
            <span className="highlight-icon">✨</span>
            <h2>30-Day Money-Back Guarantee</h2>
            <p>Not satisfied? Return any item within 30 days for a full refund!</p>
          </div>
        </section>

        <section className="returns-section">
          <h2>Return Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Request Return</h3>
              <p>Contact us within 30 days of delivery</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Ship Item</h3>
              <p>Use our prepaid return label</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Refund</h3>
              <p>Refund processed within 5-7 days</p>
            </div>
          </div>
        </section>

        <section className="returns-section">
          <h2>Return Policy</h2>
          <div className="policy-grid">
            <div className="policy-item allowed">
              <span className="policy-icon">✅</span>
              <h4>Items You Can Return</h4>
              <ul>
                <li>Unworn clothing with tags</li>
                <li>Unopened electronics</li>
                <li>Jewelry in original packaging</li>
                <li>Defective or damaged items</li>
              </ul>
            </div>
            <div className="policy-item not-allowed">
              <span className="policy-icon">❌</span>
              <h4>Items You Can't Return</h4>
              <ul>
                <li>Worn or washed clothing</li>
                <li>Opened software or media</li>
                <li>Personalized/custom items</li>
                <li>Items after 30 days</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="returns-section">
          <h2>Refund Information</h2>
          <ul className="refund-list">
            <li>Refunds issued to original payment method</li>
            <li>Shipping costs are non-refundable</li>
            <li>Partial refunds for opened items</li>
            <li>Store credit available if preferred</li>
          </ul>
        </section>

        <div className="returns-cta">
          <Link to="/contact" className="cta-button">
            Start a Return
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Returns;
