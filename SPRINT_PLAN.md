# FakeStore E-Commerce Project - Sprint Plan

## Overview
Building a complete fake e-commerce website using React + FakeStore API

## 🎯 Sprint 1: Foundation & Static Layout (30-45 min)
**Goal:** Students see a complete, styled page immediately

### Tasks:
- [ ] Setup component structure (`components/` folder)
- [ ] Navbar - Logo, search input (static), cart icon with badge
- [ ] Hero Banner - Promotional section with CTA button
- [ ] Category Filter Bar - 4 buttons (static, non-functional)
- [ ] Product Grid - 3-4 hardcoded products with full styling
- [ ] Footer - Links and copyright

### Deliverable:
Static but beautiful e-commerce homepage

---

## 🎯 Sprint 2: Full Product Display (45 min)
**Goal:** Complete the visual experience with all 20 products

### Tasks:
- [ ] ProductCard component - Reusable card with image, title, price, rating stars
- [ ] Full hardcoded dataset - All 20 products from API (copy-pasted JSON)
- [ ] Responsive Grid - 4 cols desktop, 2 tablet, 1 mobile
- [ ] Loading skeleton (static version)
- [ ] "Add to Cart" buttons on each card (visual only)

### Deliverable:
Complete product catalog with 20 items, looks like real store

---

## 🎯 Sprint 3: Interactivity & State (45-60 min)
**Goal:** Make it functional without API yet

### Tasks:
- [ ] useState for cart - Cart counter in navbar updates when clicking "Add"
- [ ] Category filtering - Filter the hardcoded array by category
- [ ] Search functionality - Client-side search through product titles
- [ ] Product detail modal/page - Click product to see full description
- [ ] Wishlist hearts - Toggle favorite state on cards

### Deliverable:
Fully interactive frontend with working filters and cart

---

## 🎯 Sprint 4: The API Integration ⭐ (60 min)
**Goal:** Replace hardcoded data with real API calls - THE MAIN LESSON

### Tasks:
- [ ] Introduce useEffect - "Where do API calls go?"
- [ ] Fetch all products - Replace hardcoded array with `fetch()`
- [ ] Loading state - Show spinner while fetching
- [ ] Error handling - Try/catch with error message display
- [ ] Refactor filters - Categories still work, but with API data
- [ ] Bonus: Fetch single product for detail view

### Deliverable:
Live e-commerce site pulling real data from FakeStore API

---

## 🎯 Sprint 5: Polish & Extra Features (Optional)
**Goal:** Add professional touches

### Tasks:
- [ ] Cart page/modal - View items in cart
- [ ] Checkout form - Static form (name, address, etc.)
- [ ] Animations - CSS transitions for cart updates
- [ ] Dark mode toggle - Theme switching practice

---

## Teaching Flow
Each sprint builds on the last. Students see immediate results in Sprints 1-3, then experience the "magic" in Sprint 4 when data becomes dynamic!

## API Endpoints Reference
- `GET https://fakestoreapi.com/products` - All 20 products
- `GET https://fakestoreapi.com/products/1` - Single product
- `GET https://fakestoreapi.com/products/categories` - 4 categories
- `GET https://fakestoreapi.com/products/category/electronics` - Filtered products

## Product Data Structure
```json
{
  "id": 1,
  "title": "Product Name",
  "price": 109.95,
  "description": "Product description...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/...",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

## Categories
- electronics
- jewelery
- men's clothing
- women's clothing

## Created
Date: 2026-01-30
Project: practice-react
