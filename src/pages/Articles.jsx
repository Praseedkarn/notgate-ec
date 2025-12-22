import React, { useState } from 'react';
import '../styles/Articles.css';
import ArticleCard from './ArticleCard';

function Articles({ onClose, onNavigateToBooks, onNavigateToGateInfo, onNavigateToEligibility }) {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const articles = [
    {
      id: 2,
      title: "Best books for GATE 2025",
      updatedDate: "Updated",
      description: "Check the best books for GATE exam preparation here. The aspiring candidates are looking for the best books of their subjects to score well in the upcoming exam.",
      category: "Books",
      linkText: "Visit now",
      linkUrl: "#books",
      isFeatured: false,
      isExternalLink: false
    },
    {
      id: 3,
      title: "GATE 2025 exam pattern",
      updatedDate: "Updated",
      description: "The paper's pattern of Questions in GATE exam is divided into Multiple Choice Question (MCQ) and Numerical Answer Type (NAT) questions. Understand the marking scheme and section-wise distribution.",
      category: "Pattern",
      linkText: "Visit now",
      linkUrl: "/pattern",
      isFeatured: false
    },
    {
      id: 4,
      title: "Eligibility for GATE 2025",
      updatedDate: "Updated",
      description: "The GATE 2025 eligibility includes the prescribed age limit, educational qualification, and nationality criteria. Check if you're eligible to apply for the examination.",
      category: "Eligibility",
      linkText: "How to fill gate",
      linkUrl: "/eligibility",
      isFeatured: false
    },
    {
      id: 5,
      title: "Fill out GATE 2025 app form",
      updatedDate: "Updated",
      description: "The last date to fill the GATE application form is 24th September 2023, and GATE 2025 will take place on 1st February 2025. Step-by-step guide to complete your application.",
      category: "Application",
      linkText: "Read more",
      linkUrl: "/application",
      isFeatured: false
    },
    {
      id: 6,
      title: "GATE 2025 cutoff trends",
      updatedDate: "Updated",
      description: "Analyze previous year cutoff trends for various IITs and PSUs. Understand how cutoffs vary by branch and category.",
      category: "Cutoff",
      linkText: "Visit now",
      linkUrl: "/cutoff",
      isFeatured: false
    },
    {
      id: 7,
      title: "Preparation strategy for GATE 2025",
      updatedDate: "Updated",
      description: "Comprehensive 6-month study plan, time management tips, and subject-wise preparation strategy from GATE toppers.",
      category: "Strategy",
      linkText: "Visit now",
      linkUrl: "/strategy",
      isFeatured: false
    },
    {
      id: 8,
      title: "Previous year question papers",
      updatedDate: "Updated",
      description: "Download solved previous year GATE question papers (2015-2024) with detailed solutions and explanations.",
      category: "PYQs",
      linkText: "Download now",
      linkUrl: "https://drive.google.com/drive/folders/1swp4dkS7X_gXmraYPLREKytm4O9S_c2D?usp=sharing",
      isFeatured: false,
      isExternalLink: true
    }
  ];

  const categories = ['All', 'Books', 'Pattern', 'Eligibility', 'Application', 'Cutoff', 'Strategy', 'PYQs'];

  const filteredArticles = activeFilter === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeFilter);

  // Function to navigate to BooksPage
  const navigateToBooksPage = () => {
    if (onNavigateToBooks) {
      onNavigateToBooks();
      onClose();
      return;
    }
    
    const navigateEvent = new CustomEvent('navigateToPage', {
      detail: { page: 'books' }
    });
    window.dispatchEvent(navigateEvent);
    
    if (onClose) onClose();
    
    setTimeout(() => {
      alert("Opening Books Page...\n\n📚 Complete Book Guide for GATE 2025 ECE");
    }, 100);
  };

  // Function to navigate to GateInfo page
  const navigateToGateInfoPage = () => {
    if (onNavigateToGateInfo) {
      onNavigateToGateInfo();
      onClose();
      return;
    }
    
    const navigateEvent = new CustomEvent('navigateToPage', {
      detail: { page: 'gateinfo', section: 'pattern' }
    });
    window.dispatchEvent(navigateEvent);
    
    if (onClose) onClose();
    
    setTimeout(() => {
      alert("Opening GATE Exam Information Page...\n\n📊 Complete GATE ECE Exam Pattern & Details");
    }, 100);
  };

  // Function to navigate to Eligibility page (ADDED)
  const navigateToEligibilityPage = () => {
    if (onNavigateToEligibility) {
      onNavigateToEligibility();
      onClose();
      return;
    }
    
    const navigateEvent = new CustomEvent('navigateToPage', {
      detail: { page: 'eligibility' }
    });
    window.dispatchEvent(navigateEvent);
    
    if (onClose) onClose();
    
    setTimeout(() => {
      alert("Opening GATE Eligibility Page...\n\n🎓 Complete Eligibility Criteria for GATE 2025");
    }, 100);
  };

  // Function to test Google Drive link
  const testDriveLink = (driveUrl) => {
    const newWindow = window.open(driveUrl, '_blank', 'noopener,noreferrer');
    
    setTimeout(() => {
      if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
        alert("⚠️ Google Drive Link Issue\n\nTrying to open: GATE PYQs (2015-2024)");
      }
    }, 500);
  };

  // Updated function to handle article clicks
  const handleArticleClick = (article) => {
    if (article.category === 'Books') {
      navigateToBooksPage();
    } else if (article.category === 'Pattern') {
      navigateToGateInfoPage();
    } else if (article.category === 'Eligibility') {
      navigateToEligibilityPage(); // ADDED
    } else if (article.isExternalLink) {
      if (article.category === 'PYQs') {
        testDriveLink(article.linkUrl);
      } else {
        window.open(article.linkUrl, '_blank', 'noopener,noreferrer');
      }
    } else {
      alert(`Navigating to: ${article.title}\nURL: ${article.linkUrl}`);
    }
  };

  // Function to handle filter button clicks (UPDATED)
  const handleFilterClick = (category) => {
    if (category === 'Books') {
      navigateToBooksPage();
    } else if (category === 'Pattern') {
      navigateToGateInfoPage();
    } else if (category === 'Eligibility') {
      navigateToEligibilityPage(); // ADDED
    } else {
      setActiveFilter(category);
    }
  };

  // Function for article card clicks (UPDATED)
  const handleArticleCardClick = (article) => {
    if (article.category === 'Books') {
      navigateToBooksPage();
    } else if (article.category === 'Pattern') {
      navigateToGateInfoPage();
    } else if (article.category === 'Eligibility') {
      navigateToEligibilityPage(); // ADDED
    } else {
      handleArticleClick(article);
    }
  };

  const handleLoadMore = () => {
    alert('Load more articles feature would be implemented here');
  };

  // Update topics list to include Eligibility navigation
  const handleTopicClick = (category) => {
    if (category === 'Books') {
      navigateToBooksPage();
    } else if (category === 'Pattern') {
      navigateToGateInfoPage();
    } else if (category === 'Eligibility') {
      navigateToEligibilityPage();
    }
    // Add other categories as needed
  };

  return (
    <div className="articles-wrapper">
      {/* Page Title Section */}
      <section className="articles-title-section">
        <div className="articles-container">
          <h1 className="articles-main-title">GATE POST & ARTICLES</h1>
          <p className="articles-subtitle">
            This post & article will encourage those wanting to explore GATE in the near future
          </p>
          <div className="articles-divider"></div>

          <button 
            className="articles-back-btn"
            onClick={onClose}
          >
            <i className="fas fa-arrow-left"></i> Back to Home
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="articles-main-content">
        <div className="articles-container">
          <div className="articles-content-wrapper">
            {/* Articles Section */}
            <div className="articles-main-section">
              <div className="articles-header">
                <h2 className="articles-section-title">Latest Articles</h2>
                <div className="articles-filter-options">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`articles-filter-btn ${activeFilter === category ? 'articles-filter-active' : ''}`}
                      onClick={() => handleFilterClick(category)}
                    >
                      {category}
                      {category === 'Books' && ' 📚'}
                      {category === 'Pattern' && ' 📋'}
                      {category === 'Eligibility' && ' 🎓'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Books Card */}
              <div className="books-promotion-card" onClick={navigateToBooksPage}>
                <div className="books-promotion-content">
                  <div className="books-promotion-icon">
                    <i className="fas fa-book"></i>
                  </div>
                  <div className="books-promotion-text">
                    {/* <h3>📖 Complete Book Guide Available</h3> */}
                    {/* <p>Click "Visit now" on Books article or click here to view detailed book recommendations for GATE 2025 ECE</p> */}
                  </div>
                  <div className="books-promotion-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>

              <div className="articles-grid">
                {filteredArticles.map(article => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onClick={() => handleArticleCardClick(article)}
                  />
                ))}
              </div>

              {/* Load More Button */}
              <div className="articles-load-more-container">
                <button 
                  className="articles-load-more-btn"
                  onClick={handleLoadMore}
                >
                  <i className="fas fa-sync-alt"></i> Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="articles-sidebar">
              <div className="articles-sidebar-widget">
                <h3 className="articles-widget-title">Popular Topics</h3>
                <ul className="articles-topic-list">
                  <li className="articles-topic-item" onClick={() => handleTopicClick('Books')} style={{cursor: 'pointer'}}>
                    <span className="articles-topic-badge" style={{backgroundColor: '#4CAF50'}}>Books</span>
                    <span className="articles-topic-count">📚 Guide</span>
                  </li>
                  <li className="articles-topic-item" onClick={() => handleTopicClick('Pattern')} style={{cursor: 'pointer'}}>
                    <span className="articles-topic-badge" style={{backgroundColor: '#2196F3'}}>Pattern</span>
                    <span className="articles-topic-count">📋 Details</span>
                  </li>
                  <li className="articles-topic-item" onClick={() => handleTopicClick('Eligibility')} style={{cursor: 'pointer'}}>
                    <span className="articles-topic-badge" style={{backgroundColor: '#FF9800'}}>Eligibility</span>
                    <span className="articles-topic-count">🎓 Criteria</span>
                  </li>
                  <li className="articles-topic-item">
                    <span className="articles-topic-badge" style={{backgroundColor: '#F44336'}}>Cutoff</span>
                    <span className="articles-topic-count">-</span>
                  </li>
                  <li className="articles-topic-item">
                    <span className="articles-topic-badge" style={{backgroundColor: '#9C27B0'}}>Application</span>
                    <span className="articles-topic-count">-</span>
                  </li>
                </ul>
              </div>

              <div className="articles-sidebar-widget">
                <h3 className="articles-widget-title">Quick Links</h3>
                <div className="articles-quick-links">
                  <button 
                    className="articles-quick-link" 
                    onClick={navigateToBooksPage}
                  >
                    <i className="fas fa-book"></i> Book Recommendations
                  </button>
                  <button 
                    className="articles-quick-link" 
                    onClick={navigateToGateInfoPage}
                  >
                    <i className="fas fa-chart-bar"></i> Exam Pattern
                  </button>
                  <button 
                    className="articles-quick-link" 
                    onClick={navigateToEligibilityPage}
                  >
                    <i className="fas fa-graduation-cap"></i> Eligibility Criteria
                  </button>
                  <a href="/syllabus" className="articles-quick-link" onClick={(e) => { e.preventDefault(); alert('Syllabus page would open'); }}>
                    <i className="fas fa-file-alt"></i> Syllabus 2025
                  </a>
                  <a href="/pyqs" className="articles-quick-link" onClick={(e) => { e.preventDefault(); alert('Previous Year Papers page would open'); }}>
                    <i className="fas fa-file-pdf"></i> Previous Year Papers
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

// Add propTypes for better development
Articles.defaultProps = {
  onNavigateToBooks: null,
  onNavigateToGateInfo: null,
  onNavigateToEligibility: null
};

export default Articles;