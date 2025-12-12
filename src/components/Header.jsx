import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ 
  setShowCalculator, 
  setShowMaterials, 
  setShowSettings, 
  setShowUnitConverter,
  setShowHelp,
  setShowGateInfo, // Add this prop
  onSearch 
}) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide header
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setShowHeader(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
      <div className="circuit-line"></div>
      <div className="header-content">
        {/* Logo Section */}
        <div 
            className="logo-container" 
            onClick={() => {
             // Close all open pages
            setShowCalculator(false);
            setShowSettings(false);
            setShowUnitConverter(false);
            setShowHelp(false);
            setShowGateInfo(false);
            setShowMaterials && setShowMaterials(false);
            
            // Scroll to top smoothly
            window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
            });
    
    // Optional: Close any expanded cards
    // setExpandedCourse(null);
    // setExpandedResource(null);
    // setExpandedMath(null);
    
    // Show home state
             console.log("Returned to home");
              }}
              style={{ cursor: 'pointer' }}
              title="Click to return to home"
            >
              <div className="logo-icon">📡</div>
              <div className="logo-text">
                <h1 className="tech-title">NOT<span>GATE</span></h1>
                <div className="subtitle">Electronics & Communication Engineering</div>
              </div>
            </div>
        
        {/* Navigation */}
        <nav className="nav-links">
          <button 
            className="nav-link" 
            onClick={scrollToTop}
            title="Go to top"
          >
            <span className="nav-icon">🏠</span>
            <span className="nav-text">Home</span>
          </button>
          
          <div className="nav-dropdown">
            <button className="nav-link">
              <span className="nav-icon">📚</span>
              <span className="nav-text">Study</span>
              <span className="dropdown-arrow">▼</span>
            </button>
            <div className="dropdown-content">
              <button 
                onClick={() => setShowGateInfo && setShowGateInfo(true)}
                className="dropdown-item gate-info-highlight"
              >
                📊 Complete GATE Exam Guide
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="dropdown-item"
              >
                ⚖️ Course Weightage
              </button>
              <button 
                onClick={() => scrollToSection('math')}
                className="dropdown-item"
              >
                🧮 Mathematics & Aptitude
              </button>
              <button 
                onClick={() => scrollToSection('resources')}
                className="dropdown-item"
              >
                📁 Study Resources
              </button>
              <button 
                onClick={() => scrollToSection('reference')}
                className="dropdown-item"
              >
                ⚡ Quick Reference
              </button>
            </div>
          </div>
          
          <div className="nav-dropdown">
  <button className="nav-link">
    <span className="nav-icon">🔧</span>
    <span className="nav-text">Tools</span>
    <span className="dropdown-arrow">▼</span>
  </button>
  <div className="dropdown-content">
    <button 
      onClick={() => setShowUnitConverter && setShowUnitConverter(true)}
      className="dropdown-item"
    >
      🔧 Unit Converter
    </button>
    <button 
      onClick={() => setShowCalculator && setShowCalculator(true)}
      className="dropdown-item"
    >
      🧮 Calculator
    </button>
    <a 
      href="https://drive.google.com/drive/folders/1swp4dkS7X_gXmraYPLREKytm4O9S_c2D?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="dropdown-item"
    >
      📁 Google Drive
    </a>
    <button 
      onClick={() => setShowSettings && setShowSettings(true)}
      className="dropdown-item"
    >
      ⚙️ Settings
    </button>
  </div>
</div>
        </nav>

        {/* User Menu */}
        <div className="user-menu">
          <div className="user-dropdown">
            <button className="user-settings" title="Settings">⚙️</button>
            <div className="user-dropdown-content">
              <button 
                className="dropdown-item" 
                onClick={() => setShowSettings && setShowSettings(true)}
              >
                ⚙️ Settings
              </button>
              {/* <button className="dropdown-item">🌙 Dark Mode</button> */}
              <button 
                className="dropdown-item"
                onClick={() => setShowHelp && setShowHelp(true)}
              >
                ❓ Help
              </button>
              {/* <button className="dropdown-item">🚪 Logout</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="circuit-line"></div>
    </header>
  );
};

export default Header;