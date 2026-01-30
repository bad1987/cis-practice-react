import React from 'react';
import '../assets/css/components/Spinner.css';

/**
 * Spinner Component - Loading indicator for async operations
 * 
 * Props:
 * - size: 'small' | 'medium' | 'large' (default: 'medium')
 * - color: 'blue' | 'white' | 'gray' (default: 'blue')
 * - text: string (optional loading text)
 * - fullScreen: boolean (default: false)
 * - inline: boolean (default: false)
 * 
 * Examples:
 * <Spinner /> - Default medium blue spinner
 * <Spinner size="large" text="Loading products..." />
 * <Spinner fullScreen text="Please wait..." />
 * <Spinner size="small" inline />
 */

function Spinner({ 
  size = 'medium', 
  color = 'blue', 
  text = '', 
  fullScreen = false,
  inline = false 
}) {
  const spinnerClass = `spinner spinner--${size} spinner--${color}`;
  
  // Fullscreen overlay (for page-level loading)
  if (fullScreen) {
    return (
      <div className="spinner-overlay">
        <div className="spinner-container">
          <div className={spinnerClass}>
            <div className="spinner__circle"></div>
          </div>
          {text && <p className="spinner-text">{text}</p>}
        </div>
      </div>
    );
  }
  
  // Inline spinner (for buttons, small areas)
  if (inline) {
    return (
      <span className={spinnerClass}>
        <span className="spinner__circle"></span>
      </span>
    );
  }
  
  // Default centered spinner (for components)
  return (
    <div className="spinner-wrapper">
      <div className={spinnerClass}>
        <div className="spinner__circle"></div>
      </div>
      {text && <p className="spinner-text">{text}</p>}
    </div>
  );
}

export default Spinner;
