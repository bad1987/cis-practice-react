import React from 'react';
import '../assets/css/pages/FAQ.css';

function FAQ() {
  const faqs = [
    {
      question: "Is FakeStore a real e-commerce website?",
      answer: "No! FakeStore is a demo project built for educational purposes. It uses the FakeStore API to demonstrate React concepts like API integration, routing, and state management. You can't actually buy anything here."
    },
    {
      question: "How do I add items to my cart?",
      answer: "Simply click the 'Add to Cart' button on any product card or product detail page. Your cart count will update in the navigation bar, and you can view your cart by clicking the cart icon."
    },
    {
      question: "What technologies are used in this project?",
      answer: "This project uses React 19, Vite for build tooling, React Router for navigation, and the FakeStore API for product data. It's styled with vanilla CSS using modern techniques like CSS Grid and Flexbox."
    },
    {
      question: "How do I filter products by category?",
      answer: "On the home page, you'll see category buttons below the hero banner. Click any category (Electronics, Jewelry, Men's/Women's Clothing) to filter the products. Click 'All Products' to see everything."
    },
    {
      question: "Is my cart data saved?",
      answer: "Currently, cart data is stored in component state, which means it will be lost if you refresh the page. In a real application, we'd use localStorage or a backend database to persist this data."
    },
    {
      question: "Can I see this project's source code?",
      answer: "Absolutely! This is an open educational project. The code demonstrates best practices for React beginners including component structure, hooks usage, and modern JavaScript patterns."
    }
  ];

  return (
    <div className="faq-page">
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions ❓</h1>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">
                <span className="faq-number">{index + 1}.</span>
                {faq.question}
              </h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="faq-footer">
          <p>Still have questions?</p>
          <a href="/contact" className="contact-link">Contact us directly</a>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
