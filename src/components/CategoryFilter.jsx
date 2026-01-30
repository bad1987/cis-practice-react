import React from 'react';
import '../assets/css/components/CategoryFilter.css';

function CategoryFilter() {
  const categories = [
    { id: 'all', name: 'All Products', icon: '🏠' },
    { id: 'electronics', name: 'Electronics', icon: '💻' },
    { id: 'jewelery', name: 'Jewelry', icon: '💍' },
    { id: "men's clothing", name: "Men's Fashion", icon: '👔' },
    { id: "women's clothing", name: "Women's Fashion", icon: '👗' }
  ];

  return (
    <section className="category-filter">
      <div className="category-container">
        <h2 className="section-title">Browse by Category</h2>
        <div className="category-buttons">
          {categories.map(category => (
            <button 
              key={category.id}
              className="category-button"
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryFilter;
