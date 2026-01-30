import React from 'react';
import '../assets/css/components/HeroBanner.css';

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">Summer Sale is Here! 🌞</h1>
        <p className="hero-subtitle">
          Get up to 50% off on all electronics and fashion items. Limited time offer!
        </p>
        <button className="hero-cta">Shop Now</button>
      </div>
      <div className="hero-decoration">
        <span className="discount-badge">-50%</span>
      </div>
    </section>
  );
}

export default HeroBanner;
