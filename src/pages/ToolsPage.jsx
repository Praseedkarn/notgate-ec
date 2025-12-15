// ToolsPage.jsx
import React, { useState } from 'react';
import '../styles/ToolPage.css';

const ToolsPage = () => {
  // Define toolsData FIRST, before any useState hooks that reference it
  const toolsData = [
    {
      id: 1,
      name: "Circuit Simulator",
      category: "simulator",
      icon: "⚡",
      description: "Build and simulate digital circuits online",
      website: "https://www.circuitlab.com",
      websiteName: "CircuitLab",
      howToUse: [
        "Sign up for free account",
        "Create new schematic",
        "Drag components from library",
        "Run simulation and analyze results",
        "Export your designs"
      ],
      features: [
        "Real-time simulation",
        "Large component library",
        "AC/DC analysis",
        "Collaboration tools"
      ],
      isFree: true,
      difficulty: "beginner"
    },
    {
      id: 2,
      name: "Falstad Circuit Simulator",
      category: "simulator",
      icon: "🔌",
      description: "Interactive circuit simulator with visual animations",
      website: "https://www.falstad.com/circuit/",
      websiteName: "Falstad",
      howToUse: [
        "Choose a circuit from examples",
        "Modify components as needed",
        "Click 'Run' to simulate",
        "Adjust values in real-time",
        "Export circuit diagram"
      ],
      features: [
        "Visual current flow",
        "Many example circuits",
        "Instant simulation",
        "No registration needed"
      ],
      isFree: true,
      difficulty: "beginner"
    },
    {
      id: 3,
      name: "Tinkercad Circuits",
      category: "simulator",
      icon: "💡",
      description: "3D design and circuit simulation by Autodesk",
      website: "https://www.tinkercad.com/circuits",
      websiteName: "Tinkercad",
      howToUse: [
        "Create free Autodesk account",
        "Start new circuit project",
        "Add Arduino/electronics components",
        "Write code in blocks or text",
        "Simulate and test"
      ],
      features: [
        "Arduino simulation",
        "3D design integration",
        "Beginner friendly",
        "Classroom features"
      ],
      isFree: true,
      difficulty: "beginner"
    },
    {
      id: 4,
      name: "EveryCircuit",
      category: "simulator",
      icon: "📱",
      description: "Interactive circuit simulator with mobile app",
      website: "https://everycircuit.com",
      websiteName: "EveryCircuit",
      howToUse: [
        "Try web version or download app",
        "Browse public circuit library",
        "Create your own circuits",
        "Animate electron flow",
        "Share with community"
      ],
      features: [
        "Animated visualization",
        "Mobile apps available",
        "Community circuits",
        "Real-time editing"
      ],
      isFree: "Freemium",
      difficulty: "intermediate"
    },
    {
      id: 5,
      name: "LTspice",
      category: "simulator",
      icon: "🔬",
      description: "Professional SPICE simulator by Analog Devices",
      website: "https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html",
      websiteName: "Analog Devices",
      howToUse: [
        "Download and install LTspice",
        "Open example circuits",
        "Create schematic",
        "Run simulation",
        "Analyze waveforms"
      ],
      features: [
        "Industry standard",
        "Powerful simulation",
        "Large model library",
        "Free for everyone"
      ],
      isFree: true,
      difficulty: "advanced"
    },
    {
      id: 6,
      name: "PCBWay PCB Calculator",
      category: "tool",
      icon: "🧮",
      description: "Collection of PCB design calculators",
      website: "https://www.pcbway.com/pcb-calculator.html",
      websiteName: "PCBWay",
      howToUse: [
        "Select calculator type",
        "Enter parameters",
        "Get instant results",
        "Use for PCB design",
        "Save calculations"
      ],
      features: [
        "Voltage divider calc",
        "Ohm's Law calculator",
        "PCB trace width",
        "Impedance calculator"
      ],
      isFree: true,
      difficulty: "beginner"
    },
    {
      id: 7,
      name: "DigiKey Calculators",
      category: "tool",
      icon: "📐",
      description: "Comprehensive electronics calculators",
      website: "https://www.digikey.com/en/resources/conversion-calculators",
      websiteName: "DigiKey",
      howToUse: [
        "Browse calculator categories",
        "Select specific calculator",
        "Input your values",
        "Get detailed results",
        "Bookmark for future"
      ],
      features: [
        "30+ calculators",
        "Unit conversion",
        "Component selection",
        "Reference data"
      ],
      isFree: true,
      difficulty: "beginner"
    },
    {
      id: 8,
      name: "All About Circuits Tools",
      category: "tool",
      icon: "🔧",
      description: "Engineering calculators and design tools",
      website: "https://www.allaboutcircuits.com/tools/",
      websiteName: "All About Circuits",
      howToUse: [
        "Navigate to tools section",
        "Choose calculator",
        "Fill in known values",
        "Calculate unknowns",
        "Read related articles"
      ],
      features: [
        "Circuit design tools",
        "Educational content",
        "Forum community",
        "Technical references"
      ],
      isFree: true,
      difficulty: "intermediate"
    }
  ];

  // NOW declare state hooks AFTER toolsData is defined
  const [activeTab, setActiveTab] = useState('all');
  const [expandedCardId, setExpandedCardId] = useState(null);
  
  const filteredTools = activeTab === 'all' 
    ? toolsData 
    : toolsData.filter(tool => tool.category === activeTab);

  const handleCardClick = (tool) => {
    if (expandedCardId === tool.id) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(tool.id);
    }
  };

  const handleVisitWebsite = (e, tool) => {
    e.stopPropagation();
    window.open(tool.website, '_blank', 'noopener,noreferrer');
  };

  const handleExpandAll = () => {
    if (expandedCardId) {
      setExpandedCardId(null);
    } else {
      // Expand the first card
      setExpandedCardId(filteredTools[0]?.id || null);
    }
  };

  const handleBookmark = (e, tool) => {
    e.stopPropagation();
    // Add bookmark functionality here
    alert(`Bookmarked ${tool.name}`);
  };

  const handleBackToHome = () => {
    window.history.href=window.location.origin;
  };

  const handleShare = (e, tool) => {
    e.stopPropagation();
    // Add share functionality here
    if (navigator.share) {
      navigator.share({
        title: tool.name,
        text: tool.description,
        url: tool.website
      });
    } else {
      alert(`Share ${tool.name}: ${tool.website}`);
    }
  };

  return (
    <div className="tools-page">
      {/* Page Header */}
      <div className="page-header">
        <h1><i className="fas fa-tools"></i> Tools & Simulators Directory</h1>
        <p className="subtitle">A curated collection of free online tools and simulators for electronics engineering, circuit design, and learning.</p>
        
        <div className="header-controls">
          <div className="stats-bar">
            <div className="stat">
              <i className="fas fa-link"></i>
              <span>{toolsData.length} Resources</span>
            </div>
            <div className="stat">
              <i className="fas fa-unlock"></i>
              <span>All Free to Use</span>
            </div>
            <div className="stat">
              <i className="fas fa-globe"></i>
              <span>Online - No Download</span>
            </div>
          </div>
          
          <button 
            className="expand-toggle-btn"
            onClick={handleExpandAll}
          >
            <i className={`fas ${expandedCardId ? 'fa-compress-alt' : 'fa-expand-alt'}`}></i>
            {expandedCardId ? 'Collapse All' : 'Expand All'}
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs">
        <button 
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('all');
            setExpandedCardId(null);
          }}
        >
          <i className="fas fa-th"></i> All Resources
        </button>
        <button 
          className={`tab-btn ${activeTab === 'simulator' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('simulator');
            setExpandedCardId(null);
          }}
        >
          <i className="fas fa-bolt"></i> Circuit Simulators
        </button>
        <button 
          className={`tab-btn ${activeTab === 'tool' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('tool');
            setExpandedCardId(null);
          }}
        >
          <i className="fas fa-calculator"></i> Calculators & Tools
        </button>
      </div>

      {/* Main Content - Now only has tools grid */}
      <div className="tools-grid-container">
        <div className="tools-grid">
          {filteredTools.map(tool => (
            <div 
              key={tool.id} 
              className={`tool-card ${expandedCardId === tool.id ? 'expanded' : ''}`}
              onClick={() => handleCardClick(tool)}
            >
              {/* Card Header */}
              <div className="tool-card-header">
                <div className="tool-icon">
                  <span>{tool.icon}</span>
                </div>
                <div className="tool-meta">
                  <span className={`difficulty-badge ${tool.difficulty}`}>
                    {tool.difficulty.charAt(0).toUpperCase() + tool.difficulty.slice(1)}
                  </span>
                  <span className="free-badge">
                    <i className="fas fa-check-circle"></i> {tool.isFree === true ? 'Free' : tool.isFree}
                  </span>
                </div>
              </div>
              
              {/* Basic Info */}
              <div className="tool-basic-info">
                <h3>{tool.name}</h3>
                <p className="website-source">
                  <i className="fas fa-external-link-alt"></i> {tool.websiteName}
                </p>
                <p className="tool-description">{tool.description}</p>
                
                <div className="tool-features">
                  {tool.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded Content - All details shown here */}
              <div className="expanded-content">
                {/* Full Features List */}
                <div className="full-features-section">
                  <h4><i className="fas fa-star"></i> Key Features</h4>
                  <ul className="features-list">
                    {tool.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fas fa-check"></i> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How to Use */}
                <div className="how-to-use-section">
                  <h4><i className="fas fa-play-circle"></i> Getting Started</h4>
                  <ol className="steps-list">
                    {tool.howToUse.map((step, index) => (
                      <li key={index}>
                        <span className="step-number">{index + 1}</span>
                        <span className="step-text">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Quick Stats */}
                <div className="tool-quick-stats">
                  <div className="stat-item">
                    <div className="stat-content">
                      <div className="stat-value"></div>
                      <div className="stat-label">
                        {tool.category === 'simulator' ? 'Circuit Simulator' : 'Calculator & Tool'}
                      </div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-content">
                      <div className="stat-value"></div>
                      <div className="stat-label">{tool.difficulty}</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-content">
                      <div className="stat-value"></div>
                      <div className="stat-label">{tool.isFree === true ? 'Free' : tool.isFree}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="tool-action-buttons">
                  <button 
                    className="action-btn primary"
                    onClick={(e) => handleVisitWebsite(e, tool)}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Visit Website
                  </button>
                </div>
              </div>

              {/* Collapsed View Actions */}
              <div className="collapsed-actions">
                <button 
                  className="expand-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(tool);
                  }}
                >
                  <i className={`fas ${expandedCardId === tool.id ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  {expandedCardId === tool.id ? 'Show Less' : 'Show More'}
                </button>
                <button 
                  className="quick-visit-btn"
                  onClick={(e) => handleVisitWebsite(e, tool)}
                >
                  <i className="fas fa-external-link-alt"></i>
                  Visit Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Footer */}
      <div className="resources-footer">
        <h3><i className="fas fa-graduation-cap"></i> Learning Resources</h3>
        <div className="resource-links">
          <a href="https://www.allaboutcircuits.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-book"></i> All About Circuits
          </a>
          <a href="https://www.electronics-tutorials.ws" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-graduation-cap"></i> Electronics Tutorials
          </a>
          <a href="https://www.khanacademy.org/science/electrical-engineering" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-video"></i> Khan Academy EE
          </a>
          <a href="https://www.edx.org/course/subject/electronics" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-university"></i> edX Electronics
          </a>
          <a href="https://www.youtube.com/@GATEWallahbyPW">
            <i className='fas fa-youtube'></i> GATE Wallah youtube 
          </a>
        </div>
      </div>

      {/* Back to Home Button - Placed below Learning Resources */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '2rem', 
        marginBottom: '2rem' 
      }}>
        {/* <button 
          onClick={handleBackToHome}
          style={{
            padding: '12px 30px',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            margin: '0 auto',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#2563eb';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#3b82f6';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          <i className="fas fa-home"></i>
          Back to Home Page
        </button> */}
      </div>
    </div>
  );
};

export default ToolsPage;