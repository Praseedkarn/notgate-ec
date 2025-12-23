import React from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
        {/* <p className="update-date">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p> */}
      </header>

      <main className="privacy-content">
        <section className="policy-section">
          <h2>Important Notice</h2>
          <p className="notice">
            <strong>NotGate EC is currently a frontend-only demonstration platform.</strong> 
            We do not collect, store, or process any personal data at this time.
          </p>
        </section>

        <section className="policy-section">
          <h2>Current Data Practices</h2>
          <ul>
            <li> <strong>No data collection</strong> - We don't save any user information</li>
            {/* <li> <strong>No backend server</strong> - All operations are local to your browser</li> */}
            <li> <strong>No cookies/tracking</strong> - We don't use analytics or tracking tools</li>
            <li> <strong>No third-party sharing</strong> - We don't share data because we don't collect any</li>
          </ul>
        </section>

        

        <section className="policy-section">
          <h2>Contact Information</h2>
          <p>
            If you have questions about this privacy policy or our practices, 
            please contact us at:
          </p>
          <div className="contact-info">
            <p> Email: praseedkumar104@gmail.com</p>
            <p> Website: https://notgate-ec.vercel.app/</p>
          </div>
        </section>

        <div className="acknowledgement">
          <p>
            By using this demonstration platform, you acknowledge that this is a 
            frontend-only application with no data collection capabilities.
          </p>
        </div>
      </main>

      
    </div>
  );
};

export default PrivacyPolicy;