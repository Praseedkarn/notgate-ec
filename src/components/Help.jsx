import React from 'react';
import '../styles/Help.css';

const Help = ({ onClose }) => {
  const faqItems = [
    {
      question: "How do I use the calculator?",
      answer: "Click on the Calculator button in the header or footer. You can switch between Scientific and Simple modes using the tabs. Use the buttons to perform calculations."
    },
    {
      question: "How do I access study materials?",
      answer: "Click on any resource card in the Resources section. It will expand to show a Google Drive link where all materials are organized."
    },
    {
      question: "How does the Unit Converter work?",
      answer: "Select a category (Decibel, Frequency, etc.), enter a value, choose 'From' and 'To' units, then click Convert. You can also use quick conversions."
    },
    {
      question: "How do I navigate between sections?",
      answer: "Use the navigation menu in the header or click on section titles in the Study dropdown menu."
    },
    {
      question: "Are my searches saved?",
      answer: "No, searches are not saved for privacy. You'll need to re-enter search terms each time."
    },
    {
      question: "Can I download the study materials?",
      answer: "Yes, all Google Drive resources can be downloaded to your device for offline access."
    }
  ];

  const contactInfo = [
    { type: "Email", value: "praseedkumar104@gmail.com", icon: "📧",link : "praseedkumar104@gmail.com"},
    { type: "GitHub", value: "https://github.com/Praseedkarn", icon: "🌐",link:"https://github.com/Praseedkarn" },
   // { type: "Hours", value: "", icon: "🕐" }
  ];

  return (
    <div className="help-overlay">
      <div className="help-container">
        {/* Header */}
        <div className="help-header">
          <div className="header-top">
            <button className="back-home-btn" onClick={onClose}>
              <span className="back-arrow">←</span>
              <span className="back-text">Back</span>
            </button>
            <div className="header-main">
              <h1>
                <span className="help-icon">❓</span>
                Help & Support
              </h1>
              <p>Get answers to common questions and learn how to use NOTGATE</p>
            </div>
          </div>
        </div>

        <div className="help-body">
          {/* Quick Start Guide */}
          <div className="help-section">
            <h2>
              <span className="section-icon">🚀</span>
              Quick Start Guide
            </h2>
            <div className="guide-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Explore Subjects</h3>
                  <p>Click on any subject card to see detailed topics and weightage</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Use Calculators</h3>
                  <p>Access scientific and simple calculators from header or floating button</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Convert Units</h3>
                  <p>Use the Unit Converter for ECE-specific unit conversions</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Access Resources</h3>
                  <p>All study materials are available in Google Drive folders</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Info About GATE </h3>
                  <p>Complete GATE Exam details : Pattern, Syllabus,dates</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="help-section">
            <h2>
              <span className="section-icon">❓</span>
              Frequently Asked Questions
            </h2>
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-question">
                    <span className="q-icon">Q:</span>
                    <h3>{item.question}</h3>
                  </div>
                  <div className="faq-answer">
                    <span className="a-icon">A:</span>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="help-section">
            <h2>
              <span className="section-icon">📞</span>
              Contact Support
            </h2>
            <div className="contact-grid">
              {contactInfo.map((contact, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-details">
                    <h3>{contact.type}</h3>
                    <p>{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="contact-form">
              <h3>Send us a message</h3>
              <form>
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="Your Email" className="form-input" />
                <textarea placeholder="Your Message" className="form-textarea" rows="4"></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div> */}
          </div>

          {/* Tips & Tricks */}
          <div className="help-section">
            <h2>
              <span className="section-icon">💡</span>
              Tips & Tricks
            </h2>
            <ul className="tips-list">
              <li>💡 <strong>Quick Navigation:</strong> Use Ctrl+F (Cmd+F on Mac) to search for specific topics</li>
              <li>💡 <strong>Calculator Shortcuts:</strong> You can use keyboard keys for calculator operations</li>
              <li>💡 <strong>Mobile Friendly:</strong> The site works perfectly on mobile devices</li>
              <li>💡 <strong>Dark Mode:</strong> Enable dark mode in Settings for better night viewing</li>
              <li>💡 <strong>Bookmark:</strong> Bookmark important pages for quick access</li>
            </ul>
          </div>

          {/* Footer */}
          <div className="help-footer">
            <p>Need more help? Check our documentation or contact support team.</p>
            <button className="close-help-btn" onClick={onClose}>
              Close Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;