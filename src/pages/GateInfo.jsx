import React, { useState } from 'react';
import '../styles/GateInfo.css';

function GateInfo({ onClose }) {
  const [activeSection, setActiveSection] = useState('pattern');

  // Exam pattern data
  const examPattern = [
    { particular: 'Examination Mode', detail: 'Computer Based Test (CBT)' },
    { particular: 'Duration', detail: '3 Hours' },
    { particular: 'Number of Subjects (Papers)', detail: '27' },
    { particular: 'Sections', detail: 'General Aptitude (GA) + Candidate’s Selected Subject' },
    { particular: 'Type of Questions', detail: '1. Multiple Choice Questions (MCQ)\n2. Multiple Select Questions (MSQ) and/or\n3. Numerical Answer Type (NAT) Questions' },
    { particular: 'Questions test these abilities', detail: '1. Recall\n2. Comprehension\n3. Application\n4. Analysis and Synthesis' },
    { particular: 'Number of Questions', detail: '10 (GA) + 55 (subject) = 65 Questions' },
    { particular: 'Distribution of Marks', detail: 'General Aptitude: 15 Marks + Engineering Mathematics: 13 Marks + Subject Questions: 72 Marks = Total: 100 Marks' },
    { particular: 'Marking Scheme', detail: 'All questions will be of 1 mark or 2 marks' },
  ];

  // Subject-wise weightage data
  const subjectWeightage = [
    { subject: 'Engineering Mathematics', 2014: '11%', 2015: '13%', 2016: '12%', 2017: '14%', 2018: '14%', 2019: '13%', 2020: '13%', 2021: '13%', 2022: '16%' },
    { subject: 'Network Theory', 2014: '11%', 2015: '9%', 2016: '8.3%', 2017: '5.5%', 2018: '7%', 2019: '5%', 2020: '5%', 2021: '12%', 2022: '8%' },
    { subject: 'Electronics Devices & Circuits', 2014: '9%', 2015: '10%', 2016: '9.5%', 2017: '11%', 2018: '12%', 2019: '13%', 2020: '10%', 2021: '6%', 2022: '8%' },
    { subject: 'Analog Electronics', 2014: '9%', 2015: '8%', 2016: '9%', 2017: '9%', 2018: '8%', 2019: '11%', 2020: '13%', 2021: '7%', 2022: '10%' },
    { subject: 'Digital Circuits', 2014: '9%', 2015: '9%', 2016: '8.3%', 2017: '10%', 2018: '11%', 2019: '6%', 2020: '9%', 2021: '9%', 2022: '11%' },
    { subject: 'Signals & Systems', 2014: '11%', 2015: '9%', 2016: '9%', 2017: '9.5%', 2018: '7%', 2019: '8%', 2020: '8%', 2021: '10%', 2022: '6%' },
    { subject: 'Control Systems', 2014: '8%', 2015: '10%', 2016: '8%', 2017: '9%', 2018: '7%', 2019: '10%', 2020: '10%', 2021: '5%', 2022: '7%' },
    { subject: 'Communication', 2014: '10%', 2015: '8%', 2016: '9%', 2017: '9%', 2018: '11%', 2019: '10%', 2020: '9%', 2021: '13%', 2022: '13%' },
    { subject: 'Electromagnetic Theory', 2014: '7%', 2015: '9%', 2016: '11.3%', 2017: '8%', 2018: '8%', 2019: '9%', 2020: '8%', 2021: '10%', 2022: '6%' },
    { subject: 'General Aptitude', 2014: '15%', 2015: '15%', 2016: '15%', 2017: '15%', 2018: '15%', 2019: '15%', 2020: '15%', 2021: '15%', 2022: '15%' },
  ];

  // Important dates
  const importantDates = [
    // { event: 'Notification Release', date: 'August 2024' },
    // { event: 'Online Application Starts', date: 'August 2024' },
    // { event: 'Application Deadline', date: 'September 2024' },
    // { event: 'Correction Window', date: 'October 2024' },
    // { event: 'Admit Card Release', date: 'January 2025' },
    // { event: 'GATE Exam Date', date: 'February 2025' },
    // { event: 'Answer Key Release', date: 'February 2025' },
    // { event: 'Result Declaration', date: 'March 2025' },
  ];

  // Preparation tips
  const preparationTips = [
    'Focus on high-weightage topics first',
    'Solve previous year papers (minimum 10 years)',
    'Take regular mock tests',
    'Maintain formula sheets for quick revision',
    'Practice numerical problems daily',
    'Study subject-wise rather than topic-wise',
    'Time management during exam is crucial',
    'Focus on conceptual clarity over rote learning',
  ];

  return (
    <div className="gate-info-page">
      {/* Header */}
      <div className="gate-info-header">
        <div className="header-top">
          <button className="back-home-btn" onClick={onClose}>
            <span className="back-arrow">←</span>
            <span className="back-text">Back to Home</span>
          </button>
          <div className="header-main">
            <h1>
              <span className="info-icon">📊</span>
              GATE ECE Exam Information
            </h1>
            <p>Complete guide for GATE Electronics & Communication Engineering</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="info-tabs">
        <button 
          className={`info-tab-btn ${activeSection === 'pattern' ? 'active' : ''}`}
          onClick={() => setActiveSection('pattern')}
        >
          📋 Exam Pattern
        </button>
        <button 
          className={`info-tab-btn ${activeSection === 'weightage' ? 'active' : ''}`}
          onClick={() => setActiveSection('weightage')}
        >
          ⚖️ Subject Weightage
        </button>
        <button 
          className={`info-tab-btn ${activeSection === 'dates' ? 'active' : ''}`}
          onClick={() => setActiveSection('dates')}
        >
          📅 Important Dates
        </button>
        <button 
          className={`info-tab-btn ${activeSection === 'tips' ? 'active' : ''}`}
          onClick={() => setActiveSection('tips')}
        >
          💡 Preparation Tips
        </button>
      </div>

      {/* Content Sections */}
      <div className="info-content">
        {activeSection === 'pattern' && (
          <div className="pattern-section">
            <h2 className="section-title">
              <span className="title-icon">📋</span>
              GATE Exam Pattern: Key Highlights
            </h2>
            
            <div className="pattern-table-container">
              <table className="pattern-table">
                <thead>
                  <tr>
                    <th>Particulars</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {examPattern.map((row, index) => (
                    <tr key={index}>
                      <td className="particular-cell">{row.particular}</td>
                      <td className="detail-cell">
                        {row.detail.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < row.detail.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mark-distribution">
              <h3>📊 Mark Distribution</h3>
              <div className="distribution-cards">
                <div className="distribution-card">
                  <div className="dist-value">15</div>
                  <div className="dist-label">General Aptitude</div>
                  <div className="dist-bar" style={{width: '15%', background: '#4361ee'}}></div>
                </div>
                <div className="distribution-card">
                  <div className="dist-value">13</div>
                  <div className="dist-label">Engineering Mathematics</div>
                  <div className="dist-bar" style={{width: '13%', background: '#4cc9f0'}}></div>
                </div>
                <div className="distribution-card">
                  <div className="dist-value">72</div>
                  <div className="dist-label">Subject Questions</div>
                  <div className="dist-bar" style={{width: '72%', background: '#f72585'}}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'weightage' && (
          <div className="weightage-section">
            <h2 className="section-title">
              <span className="title-icon">⚖️</span>
              GATE Subject-wise Weightage for ECE (2014-2022)
            </h2>
            <p className="section-subtitle">
              Analyze the frequently asked topics in GATE from the subject Wise Marks Distribution
            </p>

            <div className="weightage-table-container">
              <div className="table-scroll-wrapper">
                <table className="weightage-table">
                  <thead>
                    <tr>
                      <th rowSpan="2">GATE SUBJECTS</th>
                      <th colSpan="9">GATE Year-wise Weightage</th>
                    </tr>
                    <tr>
                      <th>2014</th>
                      <th>2015</th>
                      <th>2016</th>
                      <th>2017</th>
                      <th>2018</th>
                      <th>2019</th>
                      <th>2020</th>
                      <th>2021</th>
                      <th>2022</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjectWeightage.map((subject, index) => (
                      <tr key={index}>
                        <td className="subject-name">{subject.subject}</td>
                        <td>{subject['2014']}</td>
                        <td>{subject['2015']}</td>
                        <td>{subject['2016']}</td>
                        <td>{subject['2017']}</td>
                        <td>{subject['2018']}</td>
                        <td>{subject['2019']}</td>
                        <td>{subject['2020']}</td>
                        <td>{subject['2021']}</td>
                        <td>{subject['2022']}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="weightage-insights">
              <h3>🔍 Key Insights</h3>
              <div className="insights-grid">
                <div className="insight-card">
                  <div className="insight-icon"></div>
                  <h4>Highest Weightage 2022</h4>
                  <p>Engineering Mathematics (16%) & Communication (13%)</p>
                </div>
                <div className="insight-card">
                  {/* <div className="insight-icon">📉</div> */}
                  <h4>Lowest Weightage 2022</h4>
                  <p>Signals & Systems (6%) & Electromagnetic Theory (6%)</p>
                </div>
                <div className="insight-card">
                  {/* <div className="insight-icon">🎯</div> */}
                  <h4>Most Consistent</h4>
                  <p>General Aptitude consistently at 15% every year</p>
                </div>
                <div className="insight-card">
                  {/* <div className="insight-icon">⚠️</div> */}
                  <h4>Most Variable</h4>
                  <p>Network Theory varies from 5% to 12%</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'dates' && (
          <div className="dates-section">
            <h2 className="section-title">
              <span className="title-icon">📅</span>
              Important Dates for GATE 2025
            </h2>

            <div className="dates-timeline">
              {importantDates.map((date, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>{date.event}</h3>
                    <p>{date.date}</p>
                  </div>
                  {index < importantDates.length - 1 && <div className="timeline-line"></div>}
                </div>
              ))}
            </div>

            <div className="countdown-timer">
              <h3>⏳ COMMING SOON...</h3>
              <h2>"INTZAAR KARO PARTH SAB AAYAGA"</h2>
              <div className="timer-display">
                <div className="time-unit">
                  <div className="time-value"></div>
                  <div className="time-label"></div>
                </div>
                <div className="time-unit">
                  <div className="time-value"></div>
                  <div className="time-label"></div>
                </div>
                <div className="time-unit">
                  <div className="time-value"></div>
                  <div className="time-label"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'tips' && (
          <div className="tips-section">
            <h2 className="section-title">
              <span className="title-icon">💡</span>
              GATE Preparation Tips & Strategies
            </h2>

            <div className="tips-grid">
              {preparationTips.map((tip, index) => (
                <div key={index} className="tip-card">
                  <div className="tip-number">{index + 1}</div>
                  <div className="tip-content">
                    <h4>Tip {index + 1}</h4>
                    <p>{tip}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="study-plan">
              <h3> Recommended Study Plan</h3>
              <div className="plan-phases">
                <div className="phase">
                  <div className="phase-title">Phase 1: Foundation (3 months)</div>
                  <p>Complete all subjects, focus on concepts</p>
                </div>
                <div className="phase">
                  <div className="phase-title">Phase 2: Practice (2 months)</div>
                  <p>Solve problems, take chapter-wise tests</p>
                </div>
                <div className="phase">
                  <div className="phase-title">Phase 3: Revision (1 month)</div>
                  <p>Mock tests, previous year papers, formula revision</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="stat-card">
          {/* <div className="stat-icon"></div> */}
          <div className="stat-data">
            <div className="stat-value">3 Hours</div>
            <div className="stat-label">Exam Duration</div>
          </div>
        </div>
        <div className="stat-card">
          {/* <div className="stat-icon"></div> */}
          <div className="stat-data">
            <div className="stat-value">65</div>
            <div className="stat-label">Total Questions</div>
          </div>
        </div>
        <div className="stat-card">
          {/* <div className="stat-icon"></div> */}
          <div className="stat-data">
            <div className="stat-value">100</div>
            <div className="stat-label">Maximum Marks</div>
          </div>
        </div>
        <div className="stat-card">
          {/* <div className="stat-icon"></div> */}
          <div className="stat-data">
            <div className="stat-value">27</div>
            <div className="stat-label">Papers Available</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="gate-info-footer">
        <button className="back-home-btn-footer" onClick={onClose}>
          ← Return to GATE ECE Reference
        </button>
        <p className="footer-note">
          This information is based on previous year patterns. Always check official GATE website for latest updates.
        </p>
      </div>
    </div>
  );
}

export default GateInfo;