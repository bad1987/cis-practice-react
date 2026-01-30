# FakeStore E-Commerce - React Teaching Project

A complete e-commerce demo built with React for teaching API integration, state management, and modern frontend development practices.

**Live Demo:** Run locally at `http://localhost:5173`

---

## Project Overview

This project is designed as a teaching tool for React beginners to learn:
- Component-based architecture
- React Router for multi-page navigation
- API integration with `useEffect` and `fetch`
- State management (useState, useContext)
- Responsive CSS with Grid and Flexbox
- Loading states and user feedback

**Features:**
- 12 complete pages (Home, Product Detail, Cart, About, Contact, FAQ, Shipping, Returns, Terms, 404, Products, Spinner Demo)
- 6 reusable components
- Professional styling with CSS
- Full FakeStore API integration
- Responsive design (mobile, tablet, desktop)

---

## How This Project Was Initialized

### Step 1: Create React Project with Vite

Since `create-react-app` is deprecated, we use **Vite** (the officially recommended approach from React docs for learning):

```bash
# Create project with Vite
npm create vite@latest practice-react -- --template react

# Navigate to project
cd practice-react

# Install dependencies
npm install

# Start development server
npm run dev
```

**Interactive Alternative:**
```bash
npm create vite@latest
# - Enter project name: practice-react
# - Select framework: React
# - Select variant: JavaScript

cd practice-react
npm install
npm run dev
```

**During Setup:**
- When asked "Use rolldown-vite (Experimental)?" → Select **No** (use stable Vite)
- When asked "Install with npm and start now?" → Select **Yes** (auto-installs and starts)

### Step 2: Install Required Dependencies

```bash
# React Router for multi-page navigation
npm install react-router-dom

# All other dependencies (React, Vite) are included by default
```

### Step 3: Project Structure Created

```
practice-react/
├── public/                  # Static assets
├── src/
│   ├── assets/
│   │   ├── css/            # All stylesheets
│   │   │   ├── components/ # Component-specific CSS
│   │   │   └── pages/      # Page-specific CSS
│   │   └── react.svg       # React logo
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── Footer.jsx
│   │   └── Spinner.jsx
│   ├── pages/               # Route pages
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── Shipping.jsx
│   │   ├── Returns.jsx
│   │   ├── Terms.jsx
│   │   ├── NotFound.jsx
│   │   └── SpinnerDemo.jsx
│   ├── App.jsx              # Main app with routes
│   └── main.jsx             # React entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── .gitignore               # Git ignore rules
```

### Step 4: Organizing CSS Files

All CSS files are organized in `src/assets/css/` for better maintainability:

```bash
# Create CSS directory structure
mkdir -p src/assets/css/components
mkdir -p src/assets/css/pages

# Move component CSS
mv src/components/*.css src/assets/css/components/

# Move page CSS  
mv src/pages/*.css src/assets/css/pages/

# Move main CSS files
mv src/App.css src/assets/css/
mv src/index.css src/assets/css/
```

Update imports in all JSX files:
```javascript
// Before
import './ComponentName.css';

// After
import '../assets/css/components/ComponentName.css';
```

### Step 5: Configure React Router

In `src/App.jsx`:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}
```

---

## Quick Start for Students

### Prerequisites
- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone git@github.com:bad1987/cis-practice-react.git

# Navigate to project
cd cis-practice-react

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## Teaching Sprints

This project is organized into 5 sprints:

### Sprint 1: Foundation & Static Layout ✓
- Component structure setup
- Navbar with logo, search, cart icon
- Hero banner with promotional content
- Category filter buttons
- Product grid with hardcoded data
- Professional footer

### Sprint 2: Full Product Display ✓
- ProductCard component with image, rating, price
- All 20 products (hardcoded from API)
- Responsive grid (4 cols → 2 cols → 1 col)
- Add to Cart buttons (visual only)

### Sprint 3: Interactivity & State
- **Goal:** Make cart, filters, and search work
- useState for cart management
- Category filtering logic
- Search functionality
- Product detail modal/navigation

### Sprint 4: API Integration ⭐
- **Goal:** Replace hardcoded data with FakeStore API
- useEffect for data fetching
- fetch() for HTTP requests
- Loading states with Spinner component
- Error handling
- **Main Learning:** Async data and side effects

### Sprint 5: Polish & Extra Features
- Cart page functionality
- Checkout form
- Animations and transitions
- Dark mode toggle
- Optional: Backend integration

---

## API Integration Guide

### FakeStore API

**Base URL:** `https://fakestoreapi.com`

**Endpoints Used:**

1. **Get All Products**
   ```
   GET /products
   ```
   Returns: Array of 20 products

2. **Get Single Product**
   ```
   GET /products/:id
   ```
   Returns: Single product object

3. **Get Categories**
   ```
   GET /products/categories
   ```
   Returns: ["electronics", "jewelery", "men's clothing", "women's clothing"]

4. **Filter by Category**
   ```
   GET /products/category/:category
   ```
   Returns: Products in specified category

**Full Documentation:** See `FAKESTORE_API.md`

---

## Project Features

### Pages (12 Total)

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Product listing with hero and filters |
| Products | `/products` | Alias for Home |
| Product Detail | `/product/:id` | Single product view with quantity selector |
| Cart | `/cart` | Shopping cart with order summary |
| About | `/about` | Company info and technologies used |
| Contact | `/contact` | Contact form with validation |
| FAQ | `/faq` | Frequently asked questions |
| Shipping | `/shipping` | Delivery options and policies |
| Returns | `/returns` | Return process and policies |
| Terms | `/terms` | Terms of service and privacy |
| Spinner Demo | `/demo/spinner` | Loading indicator showcase |
| 404 | `*` | Not found page |

### Components (7 Total)

| Component | Purpose |
|-----------|---------|
| Navbar | Sticky header with logo, search, cart icon |
| HeroBanner | Promotional banner with CTA |
| CategoryFilter | Category selection buttons |
| ProductCard | Reusable product display card |
| ProductGrid | Responsive grid container |
| Footer | Site footer with links and social |
| Spinner | Loading indicator with variants |

---

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **FakeStore API** - Product data
- **CSS3** - Styling (Grid, Flexbox, Custom Properties)
- **ES6+** - Modern JavaScript features

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Mobile Responsive:** Yes, tested on mobile, tablet, and desktop

---

## Development Tips

### Hot Module Replacement (HMR)
Vite provides instant updates when you save files. No manual refresh needed!

### CSS Organization
- Component styles: `src/assets/css/components/`
- Page styles: `src/assets/css/pages/`
- Global styles: `src/assets/css/index.css`

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add link in Navbar or Footer if needed

### API Testing
Test endpoints directly in browser console:
```javascript
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => console.log(data))
```

---

## Common Issues & Solutions

### Issue: "Invalid hook call" error
**Cause:** Cached React modules after installing dependencies
**Solution:** Restart dev server: `Ctrl+C` then `npm run dev`

### Issue: Styles not applying
**Cause:** Incorrect CSS import path after moving files
**Solution:** Check import path matches `../assets/css/...`

### Issue: Routes not working
**Cause:** React Router not properly configured
**Solution:** Ensure `BrowserRouter` wraps the entire app in `App.jsx`

---

## Documentation Files

- `SPRINT_PLAN.md` - Complete 5-sprint teaching plan
- `FAKESTORE_API.md` - API documentation and usage examples
- `ADD_TO_CART_LOGIC.md` - Cart feature logic (no code, for student exercise)
- `README.md` - This file

---

## License

MIT - Feel free to use for teaching and learning!

---

## Contributing

This is a teaching project. Feel free to:
- Fork for your own classes
- Submit improvements via pull requests
- Report issues for discussion

---

## Acknowledgments

- **React Team** - For the amazing React library
- **Vite** - For the fast build tool
- **FakeStore API** - For the free e-commerce data
- **React Router** - For client-side routing

---

**Created:** January 30, 2026  
**Author:** Teaching Assistant  
**Purpose:** React API Integration Course

Happy Teaching! 🎓
