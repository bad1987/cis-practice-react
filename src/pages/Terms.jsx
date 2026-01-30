import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/pages/Terms.css';

function Terms() {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1 className="terms-title">Terms & Privacy 📜</h1>
        
        <div className="terms-tabs">
          <section className="terms-section">
            <h2>Terms of Service</h2>
            
            <div className="terms-content">
              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. This is a demo educational project and not a real 
                e-commerce platform.
              </p>

              <h3>2. Use License</h3>
              <p>
                Permission is granted to temporarily use this website for personal, non-commercial 
                transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>

              <h3>3. Disclaimer</h3>
              <p>
                The materials on this website are provided on an 'as is' basis. We make no warranties, 
                expressed or implied, and hereby disclaim and negate all other warranties including, 
                without limitation, implied warranties or conditions of merchantability.
              </p>

              <h3>4. Educational Purpose</h3>
              <p>
                This website is intended for educational purposes only. No real transactions occur, 
                and all product data is provided by the FakeStore API for demonstration purposes.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>Privacy Policy</h2>
            
            <div className="terms-content">
              <h3>Information We Collect</h3>
              <p>
                This is a demo site and does not collect real user data. Any information entered 
                in forms is for demonstration purposes only and is not stored or transmitted to 
                any server.
              </p>

              <h3>How We Use Information</h3>
              <p>
                Since this is an educational demo, no user data is actually collected, processed, 
                or shared. All interactions are client-side only.
              </p>

              <h3>Third-Party Services</h3>
              <p>
                This site uses the FakeStore API to display product information. No user data is 
                sent to this API - only product data is retrieved.
              </p>

              <h3>Your Rights</h3>
              <p>
                As no personal data is collected, there are no data rights to exercise. This is 
                purely a frontend demonstration of React capabilities.
              </p>
            </div>
          </section>
        </div>

        <div className="terms-footer">
          <p>Last updated: January 2025</p>
          <Link to="/contact" className="contact-link">
            Have questions? Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Terms;
