import React, { useState } from 'react';
import ScientificCalculator from '../components/ScientificCalculator';
import SimpleCalculator from '../components/SimpleCalculator';
import '../styles/Calculator.css';

function Calculator({ onClose }) {
  const [activeTab, setActiveTab] = useState('scientific');

  return (
    <div className="calculator-page">
      {/* Header with Back Button */}
      <div className="calculator-header">
        <div className="header-top">
          <button className="back-home-btn" onClick={onClose}>
            <span className="back-arrow">←</span>
            <span className="back-text">Back to Home</span>
          </button>
          <div className="header-main">
            <h1>
              <span className="calc-icon">🧮</span>
              ECE Calculator Suite
            </h1>
            <p>Tools for Electronics & Communication Engineering</p>
          </div>
        </div>
      </div>

      {/* Calculator Tabs */}
      <div className="calculator-tabs">
        <button 
          className={`tab-btn ${activeTab === 'scientific' ? 'active' : ''}`}
          onClick={() => setActiveTab('scientific')}
        >
          <span className="tab-icon">🧮</span>
          Scientific Calculator
        </button>
        <button 
          className={`tab-btn ${activeTab === 'simple' ? 'active' : ''}`}
          onClick={() => setActiveTab('simple')}
        >
          <span className="tab-icon">📱</span>
          Simple Calculator
        </button>
      </div>

      {/* Calculator Container */}
      <div className="calculator-container">
        {activeTab === 'scientific' ? (
          <ScientificCalculator />
        ) : (
          <SimpleCalculator />
        )}
      </div>

      {/* Tools Section */}
       <div className="calculator-tools">
        <h3>
          <span className="tools-icon">🔧</span>
          Quick Tools
        </h3>
        <div className="tools-grid">
           <div className="tool-card">
            <h4>Comming Soon...</h4>
            <p></p>
            {/* <button className="tool-btn"></button> */}
          </div> 
          {/* <div className="tool-card">
            <h4>Unit Converter</h4>
            <p>Convert between units</p>
            <button className="tool-btn">Open</button>
          </div>
          <div className="tool-card">
            <h4>Circuit Solver</h4>
            <p>Solve basic circuits</p>
            <button className="tool-btn">Try Now</button>
          </div> */}
        </div> 
      </div>

      {/* Back Button Footer */}
      <div className="calculator-footer">
        <button className="back-home-btn-footer" onClick={onClose}>
          ← Return to GATE ECE Reference
        </button>
        <p className="footer-note">
          Use these tools for your engineering calculations and study needs.
        </p>
      </div>
    </div>
  );
}

export default Calculator;