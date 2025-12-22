import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = ({ 
  setShowCalculator, 
  setShowMaterials, 
  setShowSettings, 
  setShowUnitConverter,
  setShowHelp,
  setShowGateInfo,
  onSearch,
  setShowToolPage,
  setShowArticles
}) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('menu-open');
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    document.body.classList.remove('menu-open');
  };

  const toggleDropdown = (dropdownName) => {
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    }
  };

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
    closeMobileMenu();
  };

  const handleNavClick = (action) => {
    if (typeof action === 'function') {
      action();
    }
    closeMobileMenu();
  };

  return (
    <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
      <div className="circuit-line"></div>
      <div className="header-content">
        {/* Logo Section */}
        <div 
          className="logo-container" 
          onClick={() => {
            setShowCalculator(false);
            setShowSettings(false);
            setShowUnitConverter(false);
            setShowHelp(false);
            setShowGateInfo(false);
            setShowMaterials && setShowMaterials(false);
            
            window.scrollTo({ 
              top: 0, 
              behavior: 'smooth' 
            });
            
            closeMobileMenu();
          }}
          style={{ cursor: 'pointer' }}
          title="Click to return to home"
        >
          <img src="logo_test2.png" alt="NOTGATE Logo" className='logo-image'/>
          <div className="logo-text">
            <h1 className="tech-title">NOT<span>GATE</span></h1>
            <div className="subtitle">Electronics & Communication Engineering</div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Navigation */}
        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <button 
            className="nav-link" 
            onClick={() => {
              setShowCalculator(false);
              setShowSettings(false);
              setShowUnitConverter(false);
              setShowHelp(false);
              setShowGateInfo(false);
              setShowMaterials && setShowMaterials(false);
              
              window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
              });
              
              handleNavClick();
            }}
            title="Go to Home"
          >
            <span className="nav-text">Home</span>
          </button>
          <button 
                onClick={() => handleNavClick(() => setShowArticles && setShowArticles(true))}
                className="nav-link"
              >
                Articles
              </button>

          <div className={`nav-dropdown ${activeDropdown === 'study' ? 'active' : ''}`}>
            <button 
              className="nav-link"
              onClick={() => toggleDropdown('study')}
            >
              <span className="nav-text">Study</span>
              <span className="dropdown-arrow">▼</span>
            </button>
            <div className="dropdown-content">
              <button 
                onClick={() => handleNavClick(() => setShowGateInfo && setShowGateInfo(true))}
                className="dropdown-item"
              >
                Complete GATE Exam Guide
              </button>
              <button 
                onClick={() => handleNavClick(() => scrollToSection('courses'))}
                className="dropdown-item"
              >
                Course Weightage
              </button>
              <button 
                onClick={() => handleNavClick(() => scrollToSection('math'))}
                className="dropdown-item"
              >
                Mathematics & Aptitude
              </button>
              <button 
                onClick={() => handleNavClick(() => scrollToSection('reference'))}
                className="dropdown-item"
              >
                Quick Reference
              </button>
              
            </div>
          </div>
          
          <div className={`nav-dropdown ${activeDropdown === 'tools' ? 'active' : ''}`}>
            <button 
              className="nav-link"
              onClick={() => toggleDropdown('tools')}
            >
              <span className="nav-text">Tools</span>
              <span className="dropdown-arrow">▼</span>
            </button>
            <div className="dropdown-content">
              <button 
                onClick={() => handleNavClick(() => setShowUnitConverter && setShowUnitConverter(true))}
                className="dropdown-item"
              >
                Unit Converter
              </button>
              <button 
                onClick={() => handleNavClick(() => setShowCalculator && setShowCalculator(true))}
                className="dropdown-item"
              >
                Calculator
              </button>
              <a 
                href="https://drive.google.com/drive/folders/1swp4dkS7X_gXmraYPLREKytm4O9S_c2D?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown-item"
                onClick={closeMobileMenu}
              >
                Google Drive
              </a>
              <button 
                onClick={() => handleNavClick(() => setShowHelp && setShowHelp(true))}
                className="dropdown-item"
              >
                Help
              </button>
              <button 
                onClick={() => handleNavClick(() => setShowToolPage && setShowToolPage(true))}
                className="dropdown-item"
              >
                Tools & Software
              </button>
            </div>
          </div>
        </nav>

        {/* User Menu - SIMPLIFIED VERSION */}
        <div className="user-menu">
          <button 
            className="user-settings" 
            title="Settings"
            onClick={() => {
              setShowSettings && setShowSettings(true);
              closeMobileMenu();
            }}
          >
            ⚙️
          </button>
        </div>
      </div>
      <div className="circuit-line"></div>
      
      {/* Mobile Menu Backdrop */}
      <div 
        className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      />
    </header>
  );
};

export default Header;