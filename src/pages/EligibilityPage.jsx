import React, { useState } from 'react';
import '../styles/EligibilityPage.css';

function EligibilityPage({ onClose }) {
  const [activeSection, setActiveSection] = useState('overview');

  // Eligibility data
  const eligibilityCriteria = [
    { criterion: 'Nationality', details: 'Indian nationality candidates will be eligible. Candidates from other than India will be also eligible.' },
    { criterion: 'Age Limit', details: 'There is no upper age limit for GATE exam.' },
    { criterion: 'Attempts Limit', details: 'No limit on number of attempts. Candidates can appear any number of times.' },
    { criterion: 'Marks Requirement', details: 'No minimum percentage requirement in qualifying degree for appearing in GATE.' },
    { criterion: 'Year of Passing', details: 'Candidates in final year of qualifying degree or already completed are eligible.' },
  ];

  // Educational qualification table data
  const educationalQualifications = [
    {
      degree: 'B.E./ B.Tech./ B.Pharm.',
      description: "Bachelor's degree holders in Engineering/ Technology (4 years after 10+2 or 3 years after B.Sc./Diploma in Engineering/Technology)",
      eligibility: 'Currently in the final year or already completed',
    },
    {
      degree: 'B. Arch.',
      description: "Bachelor's degree holders of Architecture (5 years course)/Naval Architecture (4 years course)/Planning (4 years course)",
      eligibility: 'Currently in the final year or already completed',
    },
    {
      degree: 'B.Sc. (Research)/ B.S.',
      description: "Bachelor's degree in Science (Post-Diploma/4 years after 10+2)",
      eligibility: 'Currently in the 4th year or already completed',
    },
    {
      degree: 'Pharm. D. (after 10+2)',
      description: 'Degree holders of 6 years program, consisting of internship or residency training during sixth year',
      eligibility: 'Currently in the 4th/5th/6th year or already completed',
    },
    {
      degree: 'MBBS',
      description: "Degree holders of M.B.B.S. and those who are in the 7th/8th/9th semester of such programme.",
      eligibility: '7th, 8th, 9th or already completed',
    },
    {
      degree: 'M. Sc./M.A./MCA or equivalent',
      description: "Master's degree in any branch of Science / Mathematics/Statistics/Computer Applications or equivalent",
      eligibility: 'Currently in the final year or already completed',
    },
    {
      degree: 'Int. M.E./ M.Tech. (Post-B.Sc.)',
      description: 'Post-BSc Integrated Master\'s degree programs in Engineering/Technology (4 years program)',
      eligibility: 'Currently in the 2nd/3rd/4th year or already completed',
    },
    {
      degree: 'Int. M.E./ M.Tech. or Dual Degree (after Diploma or 10+2)',
      description: 'Integrated Master\'s degree program or Dual Degree program in Engineering/Technology (5 years program)',
      eligibility: 'Currently in the 4th/5th year or already completed',
    },
    {
      degree: 'Int. M.Sc./ Int. B.S.-M.S.',
      description: 'Integrated M.Sc. or 5 years integrated B.S.-M.S. program',
      eligibility: 'Currently in the final year or already completed',
    },
    {
      degree: 'Professional Society Examinations (equivalent to B.E./B.Tech./ B.Arch.)',
      description: 'B.E./B.Tech./B.Arch. equivalent examinations of Professional Societies, recognized by MHRD/ UPSC/AICTE (e.g., AMIE by Institution of Engineers-India, AMICE by the Institute of Civil Engineers-India and so on)',
      eligibility: 'Completed Section A or equivalent of such professional course',
    },
  ];

  // Important points
  const importantPoints = [
    'Candidates must meet the eligibility criteria before filling the application form.',
    'There is no upper age limit for appearing in GATE exam.',
    'Candidates can appear for GATE any number of times.',
    'No minimum percentage is required in qualifying degree.',
    'Final year students are eligible to apply.',
    'GATE score is valid for THREE YEARS from the date of announcement of results.',
    'Candidates from other countries can also apply with equivalent qualifications.',
    'The qualifying degree must be recognized by UGC/AICTE/MHRD/UPSC.',
  ];

  // For International candidates
  const internationalCriteria = [
    'Must have completed or in the final year or in the pre-final year of their bachelor\'s degree in engineering and technology',
    'OR must have completed or in the final year or in the pre-final year of their Post Graduate degree in any relevant science subjects',
    'The degree must be equivalent to Indian standards as recognized by the Association of Indian Universities (AIU)',
    'Candidates need to provide equivalent certificate from AIU if required',
  ];

  return (
    <div className="eligibility-page">
      {/* Header Section */}
      <div className="eligibility-header">
        <div className="header-top">
          <button className="back-home-btn" onClick={onClose}>
            <span className="back-arrow">←</span>
            <span className="back-text">Back to Articles</span>
          </button>
          <div className="header-main">
            <h1>
              <span className="header-icon">🎓</span>
              GATE Eligibility Criteria 2025
            </h1>
            <p className="header-subtitle" style={{color: '#000000', fontWeight: '600'}}>
              Complete guide for Educational Qualification, Age Limit, and Requirements
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="eligibility-tabs">
        <button 
          className={`eligibility-tab ${activeSection === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveSection('overview')}
        >
          {/* <span className="tab-icon">📋</span> */}
          Overview
        </button>
        <button 
          className={`eligibility-tab ${activeSection === 'educational' ? 'active' : ''}`}
          onClick={() => setActiveSection('educational')}
        >
          {/* <span className="tab-icon">🎓</span> */}
          Educational Qualification
        </button>
        <button 
          className={`eligibility-tab ${activeSection === 'international' ? 'active' : ''}`}
          onClick={() => setActiveSection('international')}
        >
          {/* <span className="tab-icon">🌍</span> */}
          International Candidates
        </button>
        <button 
          className={`eligibility-tab ${activeSection === 'important' ? 'active' : ''}`}
          onClick={() => setActiveSection('important')}
        >
          {/* <span className="tab-icon"></span> */}
          Important Points
        </button>
      </div>

      {/* Main Content */}
      <main className="eligibility-content">
        {activeSection === 'overview' && (
          <div className="overview-section">
            <h2 className="section-title">
              {/* <span className="title-icon">📋</span> */}
              General Eligibility Criteria
            </h2>
            <p className="section-intro">
              Candidates need to meet the GATE eligibility criteria to appear for the GATE exam. 
              It should be noted that there is <strong>no upper age limit</strong> for applying to the GATE exam.
            </p>

            <div className="criteria-cards">
              {eligibilityCriteria.map((item, index) => (
                <div key={index} className="criteria-card">
                  <div className="criteria-card-header">
                    <span className="criteria-number">{index + 1}</span>
                    <h3 className="criteria-title">{item.criterion}</h3>
                  </div>
                  <div className="criteria-card-body">
                    <p>{item.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="highlight-box">
              <div className="highlight-icon">💡</div>
              <div className="highlight-content">
                <h3>Key Takeaway</h3>
                <p>
                  There is <strong>NO AGE LIMIT</strong> and <strong>NO MINIMUM PERCENTAGE</strong> requirement 
                  for appearing in GATE exam. Candidates can appear any number of times.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'educational' && (
          <div className="educational-section">
            <h2 className="section-title">
              {/* <span className="title-icon">🎓</span> */}
              Educational Qualification for GATE 2025
            </h2>
            <p className="section-subtitle">
              Check if your degree makes you eligible for GATE examination
            </p>

            <div className="qualification-table-container">
              <table className="qualification-table">
                <thead>
                  <tr>
                    <th>Qualifying Degree</th>
                    <th>Description</th>
                    <th>Eligibility Status</th>
                  </tr>
                </thead>
                <tbody>
                  {educationalQualifications.map((qualification, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                      <td className="degree-cell">
                        <div className="degree-name">{qualification.degree}</div>
                      </td>
                      <td className="description-cell">{qualification.description}</td>
                      <td className="eligibility-cell">
                        <span className="eligibility-badge">
                          {qualification.eligibility}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="note-box">
              <h4>📝 Important Note:</h4>
              <p>
                Candidates who have completed their qualifying degree must upload 
                the degree certificate/provisional certificate. Candidates who are 
                pursuing their qualifying degree must upload the certificate from 
                the Principal/Head of Department/Registrar/Director of the University/Institute.
              </p>
            </div>
          </div>
        )}

        {activeSection === 'international' && (
          <div className="international-section">
            <h2 className="section-title">
              {/* <span className="title-icon">🌍</span> */}
              GATE Eligibility for International Candidates
            </h2>
            <p className="section-intro">
              Candidates from countries other than India can also participate in GATE 2025 
              with the following criteria:
            </p>

            <div className="international-criteria">
              <div className="criteria-list">
                {internationalCriteria.map((item, index) => (
                  <div key={index} className="international-item">
                    <div className="item-number">{index + 1}</div>
                    <div className="item-content">
                      <p>{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="document-box">
              {/* <h3>📄 Required Documents for International Candidates:</h3> */}
              <ul className="document-list">
                <li>Passport size photograph</li>
                <li>Scanned signature</li>
                <li>Qualifying degree certificate (if completed)</li>
                <li>Certificate from University/Institute (if pursuing)</li>
                <li>Passport copy (for identification)</li>
                <li>Equivalence certificate from AIU (if required)</li>
              </ul>
            </div>
          </div>
        )}

        {activeSection === 'important' && (
          <div className="important-section">
            <h2 className="section-title">
              {/* <span className="title-icon">⚠️</span> */}
              Important Points & Guidelines
            </h2>

            <div className="points-container">
              {importantPoints.map((point, index) => (
                <div key={index} className="point-card">
                  <div className="point-header">
                    <span className="point-number">#{index + 1}</span>
                    <h4>Point {index + 1}</h4>
                  </div>
                  <div className="point-body">
                    <p>{point}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="warning-box">
              <div className="warning-icon">🚫</div>
              <div className="warning-content">
                <h3>Important Warning</h3>
                <p>
                  If a candidate is found to be ineligible at any stage of the GATE process, 
                  their candidature will be cancelled immediately. Any GATE score obtained 
                  by such candidates will be invalid.
                </p>
              </div>
            </div>

            <div className="validity-box">
              <h3>📅 GATE Score Validity</h3>
              <div className="validity-info">
                <div className="validity-item">
                  <div className="validity-icon">⏱️</div>
                  <div>
                    <h4>Score Validity Period</h4>
                    <p>3 years from the date of result announcement</p>
                  </div>
                </div>
                <div className="validity-item">
                  <div className="validity-icon">🔄</div>
                  <div>
                    <h4>Number of Attempts</h4>
                    <p>No limit - Can appear any number of times</p>
                  </div>
                </div>
                <div className="validity-item">
                  <div className="validity-icon">🎯</div>
                  <div>
                    <h4>Best Score Consideration</h4>
                    <p>Most recent score is considered for admission</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="eligibility-footer">
        <div className="footer-content">
          <div className="footer-disclaimer">
            <p>
              <strong>Disclaimer:</strong> This information is based on previous year patterns. 
              Always check the official GATE website for latest updates and exact eligibility criteria.
            </p>
            <p className="official-link">
              Official GATE Website: 
              <a 
                href="https://gate.iitkgp.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                https://gate.iitkgp.ac.in/
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default EligibilityPage;