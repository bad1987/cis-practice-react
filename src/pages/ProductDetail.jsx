import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/css/pages/ProductDetail.css';

// Sample product for demonstration (hardcoded)
const sampleProduct = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 }
};

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // In real implementation, you'd fetch the product by ID
  const product = sampleProduct;

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
        
        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.title} />
          </div>
          
          <div className="product-detail-info">
            <span className="detail-category">{product.category}</span>
            <h1 className="detail-title">{product.title}</h1>
            
            <div className="detail-rating">
              <span className="stars">
                {'★'.repeat(Math.floor(product.rating.rate))}
                {'☆'.repeat(5 - Math.floor(product.rating.rate))}
              </span>
              <span className="rating-text">
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>
            
            <p className="detail-price">${product.price}</p>
            
            <p className="detail-description">{product.description}</p>
            
            <div className="detail-actions">
              <div className="quantity-selector">
                <button className="qty-btn">-</button>
                <span className="qty-value">1</span>
                <button className="qty-btn">+</button>
              </div>
              <button className="add-cart-large">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
