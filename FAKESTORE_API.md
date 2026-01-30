# FakeStore API Documentation

## Overview
FakeStore API is a free RESTful API for e-commerce product data, perfect for teaching React and frontend development.

**Base URL:** `https://fakestoreapi.com`

**Features:**
- Real product data with images, prices, categories
- Full CRUD operations
- No authentication required for basic operations
- CORS enabled
- Fast response times

---

## Available Endpoints

### 1. Products

#### Get All Products
```
GET /products
```
**Response:** Array of 20 products

**Example Response:**
```json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest...",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
]
```

**Use Case:** 
- Display product grid on home page
- Full product catalog
- **Sprint 4: Replace hardcoded data with this endpoint**

---

#### Get Single Product
```
GET /products/:id
```

**Parameters:**
- `id` (number): Product ID (1-20)

**Example Request:**
```
GET /products/1
```

**Example Response:**
```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

**Use Case:**
- Product detail page
- Fetch product when user clicks on a product card
- **Sprint 4: Dynamic product details**

---

### 2. Categories

#### Get All Categories
```
GET /products/categories
```

**Response:**
```json
[
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]
```

**Use Case:**
- Category filter buttons
- Dropdown menus
- Navigation

---

#### Get Products by Category
```
GET /products/category/:category
```

**Parameters:**
- `category` (string): One of the category names

**Example Request:**
```
GET /products/category/electronics
```

**Example Response:** Array of products in that category

**Use Case:**
- Filter products by category
- Category-specific pages
- **Sprint 3: Make category filters work dynamically**

---

## Data Structure

### Product Object
```typescript
{
  id: number,              // Unique identifier (1-20)
  title: string,           // Product name
  price: number,          // Price in USD
  description: string,    // Full product description
  category: string,       // Category name
  image: string,          // URL to product image
  rating: {
    rate: number,        // Average rating (0-5)
    count: number        // Number of ratings
  }
}
```

### Category Distribution
- **electronics**: 6 products (IDs: 9-14)
- **jewelery**: 4 products (IDs: 5-8)
- **men's clothing**: 4 products (IDs: 1-4)
- **women's clothing**: 6 products (IDs: 15-20)

---

## Implementation Guide

### Sprint 4: Replace Hardcoded Data

#### Step 1: Fetch All Products
```javascript
useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error('Error:', error));
}, []);
```

#### Step 2: Fetch Single Product
```javascript
useEffect(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => setProduct(data))
    .catch(error => console.error('Error:', error));
}, [id]);
```

#### Step 3: Fetch Categories
```javascript
useEffect(() => {
  fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(data => setCategories(data))
    .catch(error => console.error('Error:', error));
}, []);
```

#### Step 4: Filter by Category
```javascript
useEffect(() => {
  if (selectedCategory === 'all') {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  } else {
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then(response => response.json())
      .then(data => setProducts(data));
  }
}, [selectedCategory]);
```

---

## Teaching Points

### Why This API is Perfect for Beginners
1. **No API Key** - Start immediately, no registration
2. **Real Data** - Professional product images and descriptions
3. **Consistent Structure** - Same response format every time
4. **Fast** - Quick responses for smooth demos
5. **Reliable** - 99.9% uptime, used by millions
6. **Complete** - Has everything needed for full e-commerce

### Concepts Covered
- **GET requests** - Fetching data
- **Dynamic URLs** - Using template literals for IDs
- **Error handling** - Try/catch with fetch
- **Loading states** - Showing spinners while data loads
- **Conditional rendering** - Different UI based on data state
- **useEffect** - Side effects and data fetching
- **Async/await** - Modern JavaScript patterns

### Common Mistakes to Watch For
1. **Forgetting to parse JSON** - Always `.then(res => res.json())`
2. **Infinite loops** - Missing dependency array in useEffect
3. **CORS errors** - Not an issue with this API, but good to mention
4. **Loading states** - Students forget to show loading UI
5. **Error handling** - Not handling network failures

---

## Additional Resources

### Full API Documentation
https://fakestoreapi.com/docs

### Other Free APIs for Practice
- JSONPlaceholder (https://jsonplaceholder.typicode.com/) - Posts, users, todos
- DummyJSON (https://dummyjson.com/) - Products, users, carts
- PokeAPI (https://pokeapi.co/) - Pokemon data
- OpenWeatherMap - Weather data (requires API key)

### Rate Limits
FakeStore API has generous limits:
- No authentication required
- No strict rate limiting for development
- Suitable for classroom use

---

## Sample Teaching Script

### Introduction (5 minutes)
"Today we're going to make our static e-commerce site dynamic by connecting it to a real API. The FakeStore API gives us real product data - images, prices, descriptions - everything you'd see on a real shopping website."

### Live Coding Demo (20 minutes)
1. Open DevTools Network tab
2. Show `fetch('https://fakestoreapi.com/products')`
3. Show the response in console
4. Replace hardcoded array with useEffect + fetch
5. Add loading state
6. Test the result

### Student Exercise (30 minutes)
"Now you try it! Replace the hardcoded products in your ProductGrid with data from the API. Don't forget to show a loading message while the data is fetching."

### Discussion (10 minutes)
- What happens if the API is slow?
- What if the API is down?
- How do we handle errors?
- Why do we use useEffect?

---

## Quick Reference Card

```javascript
// Get all products
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => console.log(data));

// Get one product
fetch('https://fakestoreapi.com/products/1')
  .then(res => res.json())
  .then(data => console.log(data));

// Get categories
fetch('https://fakestoreapi.com/products/categories')
  .then(res => res.json())
  .then(data => console.log(data));

// Filter by category
fetch('https://fakestoreapi.com/products/category/electronics')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## File: /home/bayanga/personal_projects/cis/practice-react/FAKESTORE_API.md
Created: 2026-01-30
Project: practice-react
