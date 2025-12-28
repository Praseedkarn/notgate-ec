import React from 'react';
import '../styles/Cutoff.css';

function CutoffPage({ onClose }) {
  return (
    <div className="cutoff-page">
      {/* Header */}
      <div className="cutoff-header">
        <div className="header-top">
          <button className="back-home-btn" onClick={onClose}>
            <span className="back-arrow">←</span>
            <span className="back-text">Back to Home</span>
          </button>
          <div className="header-main">
            <h1>
              <span className="info-icon"></span>
              GATE ECE Cutoff Trends
            </h1>
            <p>Complete analysis of GATE cutoff marks for top institutes</p>
          </div>
        </div>
      </div>

      {/* Placeholder for future content */}
      <div className="cutoff-content-placeholder">
        <div className="placeholder-message">
          <h3>🚧 Cutoff Page Under Construction 🚧</h3>
          <p>This page will contain detailed GATE cutoff trends for various IITs and PSUs</p>
          <p>Features coming soon:</p>
          <ul>
            <li>Year-wise cutoff trends (2020-2024)</li>
            <li>Institute-wise comparison</li>
            <li>Category-wise cutoff analysis</li>
            <li>Interactive charts and graphs</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="cutoff-footer">
        <button className="back-home-btn-footer" onClick={onClose}>
          ← Return to GATE ECE Reference
        </button>
        <p className="footer-note">
          Cutoff data will be updated based on official GATE results
        </p>
      </div>
    </div>
  );
}

export default CutoffPage;