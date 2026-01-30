# Add to Cart Feature - Logic Documentation

## Overview
This document describes the complete logic flow for implementing an "Add to Cart" feature in a React e-commerce application. It covers data structures, state management, user interactions, and edge cases without providing implementation code.

---

## 1. Data Structure Requirements

### Cart Item Structure
Each item in the cart needs to store:
- Product reference (ID, title, price, image)
- Quantity selected by user
- Calculated subtotal (price × quantity)

### Cart State Structure
The cart itself needs to maintain:
- Array of cart items
- Total item count (sum of all quantities)
- Total price (sum of all subtotals)

---

## 2. Core Logic Flow

### When User Clicks "Add to Cart"

**Step 1: Check if Product Already Exists**
- Search existing cart items for the product ID
- If found: Increment quantity of existing item
- If not found: Create new cart item with quantity = 1

**Step 2: Validate Stock (Optional)**
- Check if requested quantity exceeds available stock
- If exceeds: Show error or limit to max available
- If available: Proceed with addition

**Step 3: Update Cart State**
- Add or update item in cart array
- Recalculate totals (item count and price)
- Update UI to reflect changes

**Step 4: Provide User Feedback**
- Show success notification
- Update cart icon badge with new count
- Optional: Animate cart icon to draw attention

---

## 3. State Management Approach

### Cart State Location
The cart state should be accessible to:
- Product cards (to add items)
- Product detail page (to add items)
- Navbar (to display cart count)
- Cart page (to display and manage items)

Consideration: Use a global state solution or prop drilling depending on app complexity.

### State Updates
Cart state updates should trigger:
- Cart count badge update in navbar
- Cart page re-render if currently viewing
- Local storage persistence (optional)

---

## 4. Edge Cases and Validation

### Duplicate Items
- Prevent adding same product multiple times as separate entries
- Instead, increment quantity of existing entry
- Maintain single cart line item per product

### Quantity Limits
- Maximum quantity per item (e.g., 99 or based on stock)
- Minimum quantity is 1 (prevent zero or negative)
- Handle attempts to add beyond limits gracefully

### Empty Cart Scenarios
- Initial state: Cart is empty
- After removing all items: Show "empty cart" message
- Disable checkout button when cart is empty

### Product Data Changes
- Handle case where product data updates (price changes)
- Decide whether to update existing cart items or keep original price
- Handle discontinued products still in cart

---

## 5. User Interaction Patterns

### Adding from Product Card
- Click "Add to Cart" button on grid view
- Immediately add with quantity = 1
- Show brief loading state on button
- Provide visual feedback (button text change, toast notification)

### Adding from Product Detail
- User can select quantity before adding
- Validate quantity input (numbers only, within range)
- Add to cart with selected quantity
- Option to continue shopping or go to cart

### Quick Add vs. Detailed Add
- Quick add: One-click from product listing
- Detailed add: Quantity selection on detail page
- Both should update same cart state

---

## 6. Cart Calculations

### Item Count
- Sum of quantities of all items
- Display in navbar cart icon badge
- Update in real-time

### Subtotal Calculation
- For each item: price × quantity
- Sum all subtotals for cart total
- Handle floating point precision (round to 2 decimals)

### Tax and Shipping (Future Enhancement)
- Calculate tax percentage on subtotal
- Add shipping costs based on rules
- Display breakdown in cart summary

---

## 7. Cart Management Features

### Viewing Cart
- Navigate to dedicated cart page
- Display all items with images, names, prices
- Show quantity selectors for each item
- Display calculated totals

### Updating Quantities
- Increase/decrease buttons per item
- Manual input field for direct quantity entry
- Validate on change (prevent invalid values)
- Remove item if quantity set to 0

### Removing Items
- Remove button per item
- Confirm before removal (optional)
- Update totals immediately

### Clear Cart
- Option to remove all items at once
- Confirmation dialog recommended
- Reset cart to empty state

---

## 8. Persistence Strategy

### Local Storage
- Save cart to localStorage on every change
- Load cart from localStorage on app initialization
- Handle corrupted or outdated data gracefully
- Sync between tabs (optional)

### Session-Only Cart
- Keep cart only in memory (component state)
- Cart clears on page refresh
- Simpler implementation, less data consistency issues

### Backend Persistence (Advanced)
- Sync cart with user account (if authenticated)
- Merge local and server carts on login
- Handle conflicts (same product, different quantities)

---

## 9. UI/UX Considerations

### Visual Feedback
- Cart icon badge with item count
- Animation on add (cart bounce, badge pulse)
- Toast notification confirming addition
- Button state changes (loading, success)

### Accessibility
- Screen reader announcements for cart updates
- Keyboard navigation for quantity controls
- Focus management when removing items
- ARIA labels for cart icon and buttons

### Responsive Design
- Cart drawer/sidebar on mobile
- Full page cart on desktop
- Touch-friendly quantity controls
- Collapsible cart summary

---

## 10. Error Handling

### Network Errors (if syncing to backend)
- Queue cart updates if offline
- Retry sync when connection restored
- Show error if sync fails persistently

### Invalid Product Data
- Handle missing product information
- Display placeholder for unavailable images
- Remove invalid items automatically or show warning

### Storage Errors
- Handle localStorage quota exceeded
- Graceful fallback to memory-only cart
- Clear old data if needed

---

## 11. Testing Scenarios

### Functional Testing
- Add single item to empty cart
- Add same item multiple times (quantity increase)
- Add different products to cart
- Update quantities up and down
- Remove individual items
- Clear entire cart
- Persist across page refreshes (if using localStorage)

### Edge Case Testing
- Add item with 0 quantity (should not be allowed)
- Add item with very large quantity
- Rapid consecutive clicks on "Add to Cart"
- Modify cart while on cart page
- Browser back button after adding to cart

### User Experience Testing
- Verify cart updates in real-time
- Check visual feedback animations
- Test on mobile touch devices
- Verify accessibility with screen readers

---

## 12. Performance Considerations

### Optimization Strategies
- Debounce rapid add-to-cart clicks
- Lazy load cart data if cart is large
- Optimize re-renders (React.memo, useMemo where appropriate)
- Virtualize cart list if 100+ items (unlikely for e-commerce)

### State Update Efficiency
- Batch multiple cart updates
- Avoid unnecessary recalculations
- Memoize derived values (totals, counts)

---

## 13. Integration Points

### With Product Listing
- Each card needs "Add to Cart" button
- Pass product data to cart handler
- Update button state during add operation

### With Product Detail
- Quantity selector input
- Add to cart button with selected quantity
- Show "Continue Shopping" vs "Go to Cart" options

### With Navbar
- Cart icon with dynamic badge
- Click to navigate to cart page
- Real-time count updates

### With Cart Page
- Display all cart items
- Manage quantities and removals
- Show order summary and totals
- Checkout button (can be non-functional for demo)

---

## 14. Business Logic Decisions

### Guest vs. Logged-in Users
- Allow cart for guest users (localStorage)
- Persist to account on login (optional)
- Merge guest cart with account cart (optional)

### Cart Expiration
- Should cart expire after time? (typically no)
- Clear cart after checkout? (yes)
- Retain cart across sessions? (yes, via localStorage)

### Price Freezing
- Lock price at time of adding to cart?
- Or update to current price when viewing cart?
- Decision affects user trust and business logic

---

## Summary

The Add to Cart feature requires:
1. Well-defined data structures for cart items
2. Global state management accessible across components
3. Logic for adding, updating, and removing items
4. Real-time calculation of totals and counts
5. Persistence strategy (localStorage recommended for beginners)
6. Comprehensive UI feedback and error handling
7. Edge case handling for robust user experience

This logic forms the foundation for a complete shopping cart system suitable for teaching React state management and user interaction patterns.

---

**Document Location:** `/home/bayanga/personal_projects/cis/practice-react/ADD_TO_CART_LOGIC.md`  
**Created:** 2026-01-30  
**Purpose:** Logic documentation for teaching cart functionality in Sprint 3
