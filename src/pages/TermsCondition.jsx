import React from 'react';
import '../styles/TermsConditions.css';

const TermsConditions = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "Dec 2025";

  return (
    <div className="terms-page">
      <header className="terms-header">
        <div className="container">
          <h1>Terms and Conditions</h1>
          <p className="effective-date">Effective Date: {lastUpdated}</p>
          <p className="site-reference">For: NotGate GATE ECE Preparation Portal</p>
        </div>
      </header>

      <main className="terms-content">
        <div className="container">
          {/* Important Notice */}
          <div className="notice-box">
            <div className="notice-icon">ℹ</div>
            <div className="notice-content">
              <h3>About NotGate</h3>
              <p>
                NotGate (<a href="https://notgate-ec.vercel.app/">notgate-ec.vercel.app</a>) 
                is an educational platform providing GATE (Graduate Aptitude Test in Engineering) 
                preparation resources for Electronics & Communication Engineering (ECE).
              </p>
            </div>
          </div>

          <section className="terms-section">
            <h2> Acceptance of Terms</h2>
            <p>
              By accessing and using the NotGate website, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms and Conditions.
            </p>
            <div className="highlight-box">
              <p>
                <strong>Note:</strong> This website provides educational resources and is 
                <strong> not affiliated with official GATE conducting bodies</strong> (IITs/IISc).
              </p>
            </div>
          </section>

          {/* <section className="terms-section">
            <h2> Description of Service</h2>
            <p>NotGate provides the following educational resources for GATE ECE preparation:</p>
            <div className="service-grid">
              <div className="service-card">
                <div className="service-icon">📚</div>
                <h4>Subject Analysis</h4>
                <ul>
                  <li>Topic-wise weightage breakdown</li>
                  <li>9 core ECE subjects covered</li>
                  <li>Exam pattern guidance</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">📖</div>
                <h4>Study Resources</h4>
                <ul>
                  <li>Textbooks & formula sheets</li>
                  <li>Previous Year Questions (PYQs)</li>
                  <li>Personalized study notes</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">🛠️</div>
                <h4>Tools & Strategy</h4>
                <ul>
                  <li>Circuit simulators & calculators</li>
                  <li>Exam preparation strategies</li>
                  <li>Quick reference materials</li>
                </ul>
              </div>
            </div>
          </section> */}

          {/* <section className="terms-section">
            <h2> Intellectual Property Rights</h2>
            <div className="ip-rights">
              <div className="ip-item">
                <h4>✅ You MAY:</h4>
                <ul>
                  <li>Use all materials for personal GATE preparation</li>
                  <li>Download resources for offline study</li>
                  <li>Share links to the NotGate website</li>
                  <li>Reference the topic weightage for study planning</li>
                </ul>
              </div>
              <div className="ip-item">
                <h4>❌ You MAY NOT:</h4>
                <ul>
                  <li>Redistribute or sell our curated content</li>
                  <li>Claim our materials as your own work</li>
                  <li>Use site content for commercial purposes</li>
                  <li>Modify and republish without permission</li>
                </ul>
              </div>
            </div>
          </section> */}

          <section className="terms-section">
            <h2> External Resources & Links</h2>
            <p>The website contains links to external resources:</p>
            <div className="external-links">
              <div className="external-link-item">
                <span className="link-icon"></span>
                <div>
                  <h4>Google Drive Resources</h4>
                  <p>Study materials hosted on Google Drive - access at your own discretion</p>
                </div>
              </div>
              <div className="external-link-item">
                <span className="link-icon"></span>
                <div>
                  <h4>Official GATE Website</h4>
                  <p>
                    We link to <a href="https://gate.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer">gate.iitkgp.ac.in</a> for official information
                  </p>
                </div>
              </div>
              <div className="external-link-item">
                <span className="link-icon"></span>
                <div>
                  <h4>Online Tools</h4>
                  <p>Circuit simulators and calculators from third-party providers</p>
                </div>
              </div>
            </div>
            <div className="warning-box">
              <p>
                <strong>Disclaimer:</strong> NotGate is not responsible for the content, 
                availability, or privacy practices of these external sites.
              </p>
            </div>
          </section>

          {/* <section className="terms-section">
            <h2>5. Educational Use Disclaimer</h2>
            <div className="disclaimer-grid">
              <div className="disclaimer-item">
                <h4>🎯 Purpose</h4>
                <p>This site provides supplementary study materials and guidance for GATE ECE preparation.</p>
              </div>
              <div className="disclaimer-item">
                <h4>⚠️ No Guarantees</h4>
                <p>We do not guarantee exam success. Your preparation outcomes depend on individual effort.</p>
              </div>
              <div className="disclaimer-item">
                <h4>📝 Verification</h4>
                <p>Always verify exam details (dates, syllabus, patterns) from official GATE sources.</p>
              </div>
              <div className="disclaimer-item">
                <h4>🎓 Personal Responsibility</h4>
                <p>You are solely responsible for your study plan and preparation strategy.</p>
              </div>
            </div>
          </section> */}

          {/* <section className="terms-section">
            <h2> User Responsibilities</h2>
            <ul className="responsibility-list">
              <li>Use the website for lawful educational purposes only</li>
              <li>Verify information from primary sources when making important decisions</li>
              <li>Respect intellectual property rights of all content providers</li>
              <li>Report any inaccuracies or issues you encounter</li>
            </ul>
          </section> */}

          <section className="terms-section">
            <h2> Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. 
              The "Effective Date" at the top will be updated accordingly. 
              Your continued use of NotGate constitutes acceptance of any revised terms.
            </p>
          </section>

          <section className="terms-section contact-section">
            <h2> Contact & Information</h2>
            <div className="contact-info">
              <p><strong>Website:</strong> <a href="https://notgate-ec.vercel.app/">https://notgate-ec.vercel.app/</a></p>
              <p><strong>Purpose:</strong> GATE ECE Preparation Portal</p>
              {/* <p><strong>Subjects Covered:</strong> 9 Core ECE subjects + General Aptitude</p> */}
              <p>
                <strong>Official GATE Information:</strong>{' '}
                <a href="https://gate.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer">
                  https://gate.iitkgp.ac.in/
                </a>
              </p>
            </div>
          </section>

          <div className="acknowledgement-box">
            <h3>Acknowledgement</h3>
            <p>
              By using NotGate, you acknowledge that you have read these Terms and Conditions 
              and agree to use the website as an educational resource for GATE ECE preparation.
            </p>
            <p className="update-note">
              <em>Last reviewed and updated: {lastUpdated}</em>
            </p>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default TermsConditions;