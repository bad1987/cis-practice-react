import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/components/ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.title}
            className="product-image"
          />
          <button 
            className="wishlist-button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Wishlist functionality will be added later
            }}
          >
            ❤️
          </button>
        </div>
        
        <div className="product-info">
          <span className="product-category">{product.category}</span>
          <h3 className="product-title">{product.title}</h3>
          
          <div className="product-rating">
            <span className="stars">
              {'★'.repeat(Math.floor(product.rating.rate))}
              {'☆'.repeat(5 - Math.floor(product.rating.rate))}
            </span>
            <span className="rating-count">({product.rating.count})</span>
          </div>
          
          <div className="product-footer">
            <span className="product-price">${product.price}</span>
          </div>
        </div>
      </Link>
      
      <div className="product-actions">
        <button 
          className="add-to-cart-btn"
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart functionality will be added later
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
