import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import '../assets/css/pages/SpinnerDemo.css';

/**
 * Spinner Demo Page - Shows all spinner variants and use cases
 * 
 * This page demonstrates:
 * 1. Different spinner sizes
 * 2. Different colors
 * 3. With and without text
 * 4. Fullscreen overlay
 * 5. Inline (button) usage
 * 6. Simulated async loading
 */

function SpinnerDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  // Simulate async operation
  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const simulateButtonLoading = () => {
    setIsButtonLoading(true);
    setTimeout(() => {
      setIsButtonLoading(false);
    }, 2000);
  };

  return (
    <div className="spinner-demo-page">
      <div className="demo-container">
        <h1 className="demo-title">Spinner Component Demo 🌀</h1>
        <p className="demo-subtitle">
          Professional loading indicators for your React application
        </p>

        {/* Size Variants */}
        <section className="demo-section">
          <h2>Size Variants</h2>
          <div className="demo-row">
            <div className="demo-item">
              <Spinner size="small" />
              <span className="demo-label">Small (16px)</span>
            </div>
            <div className="demo-item">
              <Spinner size="medium" />
              <span className="demo-label">Medium (40px) - Default</span>
            </div>
            <div className="demo-item">
              <Spinner size="large" />
              <span className="demo-label">Large (64px)</span>
            </div>
          </div>
        </section>

        {/* Color Variants */}
        <section className="demo-section">
          <h2>Color Variants</h2>
          <div className="demo-row">
            <div className="demo-item">
              <Spinner color="blue" />
              <span className="demo-label">Blue (Primary)</span>
            </div>
            <div className="demo-item dark-bg">
              <Spinner color="white" />
              <span className="demo-label white-text">White</span>
            </div>
            <div className="demo-item">
              <Spinner color="gray" />
              <span className="demo-label">Gray</span>
            </div>
          </div>
        </section>

        {/* With Text */}
        <section className="demo-section">
          <h2>With Loading Text</h2>
          <div className="demo-row">
            <Spinner size="medium" text="Loading products..." />
          </div>
          <div className="demo-row">
            <Spinner size="large" text="Fetching data from server..." />
          </div>
        </section>

        {/* Inline (Button) Usage */}
        <section className="demo-section">
          <h2>Button Loading State</h2>
          <div className="demo-row">
            <button 
              className="demo-button"
              onClick={simulateButtonLoading}
              disabled={isButtonLoading}
            >
              {isButtonLoading ? (
                <>
                  <Spinner size="small" color="white" inline />
                  Processing...
                </>
              ) : (
                'Add to Cart'
              )}
            </button>
          </div>
          <p className="demo-hint">Click the button to see inline spinner</p>
        </section>

        {/* Fullscreen Demo */}
        <section className="demo-section">
          <h2>Fullscreen Loading</h2>
          <div className="demo-row">
            <button 
              className="demo-button demo-button-secondary"
              onClick={simulateLoading}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Show Fullscreen Spinner (3s)'}
            </button>
          </div>
          <p className="demo-hint">Click to simulate page-level loading</p>
        </section>

        {/* Real-World Examples */}
        <section className="demo-section">
          <h2>Real-World Examples</h2>
          
          <div className="example-card">
            <h3>Example 1: Product Grid Loading</h3>
            <pre className="code-block">
{`// ProductGrid.jsx
import Spinner from './Spinner';

function ProductGrid({ products, loading }) {
  if (loading) {
    return (
      <div className="spinner-grid">
        <Spinner 
          size="large" 
          text="Loading products..." 
        />
      </div>
    );
  }
  
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}`}
            </pre>
          </div>

          <div className="example-card">
            <h3>Example 2: API Data Fetching</h3>
            <pre className="code-block">
{`// App.jsx or Component
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner size="large" text="Loading products..." />;
  }

  return <div>{/* Render products */}</div>;
}`}
            </pre>
          </div>

          <div className="example-card">
            <h3>Example 3: Form Submit Button</h3>
            <pre className="code-block">
{`// ContactForm.jsx
import { useState } from 'react';
import Spinner from './Spinner';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner size="small" color="white" inline />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}`}
            </pre>
          </div>
        </section>

        {/* API Reference */}
        <section className="demo-section">
          <h2>Component API</h2>
          <table className="api-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>'medium'</td>
                <td>'small', 'medium', or 'large'</td>
              </tr>
              <tr>
                <td>color</td>
                <td>string</td>
                <td>'blue'</td>
                <td>'blue', 'white', or 'gray'</td>
              </tr>
              <tr>
                <td>text</td>
                <td>string</td>
                <td>''</td>
                <td>Loading text below spinner</td>
              </tr>
              <tr>
                <td>fullScreen</td>
                <td>boolean</td>
                <td>false</td>
                <td>Full page overlay with blur</td>
              </tr>
              <tr>
                <td>inline</td>
                <td>boolean</td>
                <td>false</td>
                <td>For use inside buttons/text</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Best Practices */}
        <section className="demo-section">
          <h2>Best Practices</h2>
          <ul className="best-practices">
            <li>
              <strong>Always show loading state</strong> - Never leave users guessing if something is happening
            </li>
            <li>
              <strong>Use appropriate size</strong> - Small for buttons, medium for components, large for fullscreen
            </li>
            <li>
              <strong>Add descriptive text</strong> - Tell users what is loading (e.g., "Loading products..." not just "Loading...")
            </li>
            <li>
              <strong>Disable buttons</strong> - Prevent double-clicks while loading
            </li>
            <li>
              <strong>Consider skeletons</strong> - For better UX, use skeleton screens instead of spinners for content loading
            </li>
          </ul>
        </section>
      </div>

      {/* Fullscreen spinner overlay (shown when isLoading is true) */}
      {isLoading && (
        <Spinner 
          fullScreen 
          size="large" 
          text="Loading data... Please wait" 
        />
      )}
    </div>
  );
}

export default SpinnerDemo;
