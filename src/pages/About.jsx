import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/pages/About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About FakeStore 🛍️</h1>
        
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, FakeStore started with a simple mission: to provide a realistic 
            e-commerce experience for developers learning React. We're not a real store, but 
            we sure look like one!
          </p>
          <p>
            This project demonstrates modern web development practices including React Router, 
            API integration, state management, and responsive design.
          </p>
        </section>

        <section className="about-section">
          <h2>What You'll Learn</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">⚛️</span>
              <h3>React Fundamentals</h3>
              <p>Components, props, state, and hooks</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌐</span>
              <h3>API Integration</h3>
              <p>Fetching data with useEffect and fetch API</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎨</span>
              <h3>Responsive Design</h3>
              <p>CSS Grid, Flexbox, and mobile-first approach</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🛣️</span>
              <h3>Client-Side Routing</h3>
              <p>React Router for multi-page experience</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Technologies Used</h2>
          <div className="tech-list">
            <span className="tech-badge">React 19</span>
            <span className="tech-badge">Vite</span>
            <span className="tech-badge">React Router</span>
            <span className="tech-badge">FakeStore API</span>
            <span className="tech-badge">CSS Modules</span>
          </div>
        </section>

        <div className="about-cta">
          <Link to="/" className="cta-button">
            Start Shopping →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
