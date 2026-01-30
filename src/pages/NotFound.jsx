import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/pages/NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found 🔍</h2>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="home-link">
          ← Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
