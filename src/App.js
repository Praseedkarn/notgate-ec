import React, { useState, useEffect } from 'react';
import './App.css';
import Calculator from './pages/Calculator';
import Setting from './pages/Setting';
import Header from './components/Header';
import UnitConverter from './components/UnitConverter';
import Help from './components/Help';
import GateInfo from './pages/GateInfo';
import ToolsPage from './pages/ToolsPage';
import AboutUs from './pages/AboutUs';
import TermsConditions from './pages/TermsCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Articles from './pages/Articles';
import BooksPage from './pages/BookPage';
import EligibilityPage from './pages/EligibilityPage';
import CutoffPage from './pages/CutoffPage';

function App() {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [expandedResource, setExpandedResource] = useState(null);
  const [expandedMath, setExpandedMath] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMaterials, setShowMaterials] = useState(false);
  const [showUnitConverter, setShowUnitConverter] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');
  const [showGateInfo, setShowGateInfo] = useState(false);
  const [showToolPage , setShowToolPage]=useState(false);
  const [showAbout , setShowAbout ]= useState(false);
  const [showTermsCondition  , setShowTermsCondition]= useState(false);
  const [showPrivacyPolicy , setShowPrivacyPolicy]=useState(false);
  const [showArticles , setShowArticles ]= useState(false);
  const [showBookPage , setShowBookPage]=useState(false);
  const [showEligigibilityPage , setShowEligibilityPage]=useState(false);
  const [gateInfoSection ,setGateInfoSection]=useState('pattern');
  const [showCutoffPage , setShowCutoffPage]=useState(false);

const handleNavigation = (page, section = 'pattern') => {
  // Close all pages first
  setShowCalculator(false);
  setShowUnitConverter(false);
  setShowGateInfo(false);
  setShowMaterials(false);
  setShowSettings(false);
  setShowHelp(false);
  setShowToolPage(false);
  setShowAbout(false);
  setShowPrivacyPolicy(false);
  setShowTermsCondition(false);
  setShowArticles(false);
  setShowBookPage(false);
  setShowEligibilityPage(false);
  setShowCutoffPage(false);
  // Then open the requested page
  if (page === 'gate-info' || page === 'gateinfo') {
    setGateInfoSection(section);  // Set the section
    setShowGateInfo(true);
  } else if (page === 'calculator') {
    setShowCalculator(true);
  } else if (page === 'unit-converter') {
    setShowUnitConverter(true);
  } else if (page === 'materials') {
    setShowMaterials(true);
  } else if (page === 'settings') {
    setShowSettings(true);
  } else if (page === 'help') {
    setShowHelp(true);
  } else if (page === 'tools') {
    setShowToolPage(true);
  } else if (page === 'about') {
    setShowAbout(true);
  } else if (page === 'Term-conditions') {
    setShowTermsCondition(true);
  } else if (page === 'Privacy-Policy') {
    setShowPrivacyPolicy(true);
  } else if (page === 'articles') {
    setShowArticles(true);
  } else if (page === 'books') {
    setShowBookPage(true);
  } else if (page === 'eligibility-page') {
    setShowEligibilityPage(true);
  }else if (page==='cutoff'){
    setShowCutoffPage(true);
  }
};


  // Load theme from localStorage on app start
  useEffect(() => {
    const savedSettings = localStorage.getItem('gate-ece-settings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setCurrentTheme(settings.theme || 'light');
      applyThemeToBody(settings.theme || 'light');
      
      // Apply font size
      if (settings.fontSize) {
        const fontSize = settings.fontSize === 'small' ? '14px' :
                         settings.fontSize === 'large' ? '18px' : '16px';
        document.documentElement.style.fontSize = fontSize;
      }
    } else {
      applyThemeToBody('light');
    }
  }, []);



  // Function to apply theme to body
  const applyThemeToBody = (theme) => {
    // Remove all theme classes
    document.body.classList.remove('electronic-theme', 'dark-mode', 'light-mode', 'blue-theme');
    
    // Add the selected theme class
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else if (theme === 'light') {
      document.body.classList.add('light-mode'); // FIXED
    } else if (theme === 'blue') {
      document.body.classList.add('blue-theme');
    } else if (theme === 'electronic') {
      document.body.classList.add('electronic-theme'); // FIXED
    } else {
      document.body.classList.add('light-mode'); // Default fallback
    }
  };

  // Function to handle theme change from Settings
  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    applyThemeToBody(theme);
  };

  // Course weightage data with detailed topics
  const courseWeightage = [
    { 
      id: 1,
      course: 'Engineering Mathematics', 
      percentage: '15%', 
      questions: '10-12',
      topics: [
        'Linear Algebra: Matrix algebra, Systems of linear equations',
        'Calculus: Mean value theorems, Vector calculus',
        'Differential Equations: First order equations',
        'Complex Variables: Analytic functions, Cauchy\'s integral theorem',
        'Probability & Statistics: Random variables, Distributions'
      ],
      importance: 'Very High',
      color: '#4299e1',
      youtubeLink :"https://youtube.com/playlist?list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&si=O4cdEU0MJDgHaE7p"
    },
    { 
      id: 2,
      course: 'Networks, Signals & Systems', 
      percentage: '15%', 
      questions: '10-12',
      topics: [
        'Network Theorems: Superposition, Thevenin, Norton',
        'Transient Analysis: RC, RL, RLC circuits',
        'Two-port Networks: Parameters, Reciprocity',
        'Fourier Series & Transform: Properties, Applications',
        'Laplace Transform: System analysis, Transfer functions'
      ],
      importance: 'Very High',
      color: '#38a169',
      youtubeLink:" https://youtube.com/playlist?list=PL3eEXnCBViH-mxwEDOfUaTNazck6Pf8Jt&si=pQ2QurY075aXUqHE"
    },
    { 
      id: 3,
      course: 'Electronic Devices', 
      percentage: '10%', 
      questions: '6-8',
      topics: [
        'Semiconductor Physics: Energy bands, Carrier transport',
        'PN Junction Diode: I-V characteristics, Breakdown',
        'BJT: Operation, Configurations, Biasing',
        'MOSFET: Characteristics, Operation regions',
        'Optoelectronic Devices: LEDs, Photodiodes, Solar cells'
      ],
      importance: 'High',
      color: '#d69e2e',
      youtubeLink:"https://youtube.com/playlist?list=PL3eEXnCBViH_ynvBiNPBBkzCOZ4vDCG7f&si=QmxrtQMirsRIjFHI"
    },
    { 
      id: 4,
      course: 'Analog Circuits', 
      percentage: '9%', 
      questions: '6-8',
      topics: [
        'Diode Circuits: Clippers, Clampers, Rectifiers',
        'BJT Amplifiers: CE, CB, CC configurations',
        'MOSFET Amplifiers: CS, CG, CD configurations',
        'Operational Amplifiers: Applications, Feedback',
        'Oscillators: RC, LC, Crystal oscillators'
      ],
      importance: 'High',
      color: '#ed8936',
      youtubeLink:"https://youtube.com/playlist?list=PL3eEXnCBViH8x_j-ulD23V4CIDazfrWfa&si=ECH3tfX7gfIfnI5q"
    },
    { 
      id: 5,
      course: 'Digital Circuits', 
      percentage: '10%', 
      questions: '6-8',
      topics: [
        'Boolean Algebra: Minimization, K-maps',
        'Combinational Circuits: Adders, Multiplexers, Decoders',
        'Sequential Circuits: Flip-flops, Counters, Registers',
        'ADC/DAC: Types, Characteristics, Applications',
        'Microprocessors: 8085/8086 architecture, Programming'
      ],
      importance: 'High',
      color: '#9f7aea',
      youtubeLink:"https://youtube.com/playlist?list=PLs5_Rtf2P2r77kmBnXAe06RsI3VadeQ5s&si=6-WB1E_NbliUXf30"
    },
    { 
      id: 6,
      course: 'Control Systems', 
      percentage: '8%', 
      questions: '5-7',
      topics: [
        'Feedback Principles: Open loop, Closed loop',
        'Time Response Analysis: First & second order systems',
        'Stability Analysis: Routh-Hurwitz, Root locus',
        'Frequency Response: Bode plots, Nyquist stability',
        'State Space Analysis: State equations, Controllability'
      ],
      importance: 'Medium',
      color: '#f56565',
      youtubeLink:"https://youtube.com/playlist?list=PL3eEXnCBViH9hKdP7FLT9XBBwdaKC0SPk&si=ez0-gjmO-E7KGDxG"
    },
    { 
      id: 7,
      course: 'Communications', 
      percentage: '10%', 
      questions: '10-12',
      topics: [
        'Analog Modulation: AM, FM, PM techniques',
        'Digital Modulation: ASK, PSK, FSK, QAM',
        'Information Theory: Entropy, Channel capacity',
        'Noise Performance: SNR, Noise figure',
        'Wireless Communication: Cellular systems, Multipath'
      ],
      importance: 'Very High',
      color: '#4299e1',
      youtubeLink:"https://youtube.com/playlist?list=PL3eEXnCBViH9XJFSr_u4KDhtIihTJ6Kl6&si=YIio-F87ATdm9XbN"
    },
    { 
      id: 8,
      course: 'Electromagnetics', 
      percentage: '8%', 
      questions: '6-8',
      topics: [
        'Vector Calculus: Gradient, Divergence, Curl',
        'Maxwell\'s Equations: Differential & integral forms',
        'EM Waves: Propagation, Reflection, Refraction',
        'Transmission Lines: Parameters, Smith chart',
        'Waveguides: Rectangular, Circular waveguides',
        
      ],
      importance: 'Medium',
      color: '#4fd1c7',
      youtubeLink:"https://youtube.com/playlist?list=PLgwJf8NK-2e4I_YltJja47CwZJkzNWK89&si=PZ9WPaQ9if7yh9nJ"
    },
    { 
      id: 9,
      course: 'General Aptitude', 
      percentage: '15%', 
      questions: '10-12',
      topics: [
       'Verbal Ability: Grammar, Vocabulary, Comprehension',
        'Numerical Ability: Arithmetic, Algebra, Geometry',
        'Logical Reasoning: Puzzles, Data interpretation',
        'Quantitative Aptitude: Number systems, Percentages',
        'Data Sufficiency: Problem solving, Analysis'
      ],
      importance: 'Very High',
      color: '#a0aec0',
      youtubeLink:"https://youtube.com/playlist?list=PLvTTv60o7qj_znrv7_BwPkcHpBwM-pqod&si=Bzo8553rx9PqmvAL"
    }
  ];

  // Resources with details
  const resources = [
    {
      id: 1,
      type: ' Text Books',
      items: [
        'Basic Electronics - B. Lal & N. Subrahmanyam',
        'Signals & Systems - Alan V. Oppenheim',
        'Digital Design - Morris Mano',
        'Network Analysis - Van Valkenburg',
        'Communication Systems - Simon Haykin',
      ],
      description: 'Standard textbooks for GATE ECE preparation',
      icon: '',
      folderLink:'https://drive.google.com/drive/folders/1sJQg9MSp69gQ2RfG85U1y6cSSUlkH2VS?usp=drive_link'
    },
    {
      id: 2,
      type: ' Formula Sheets',
      items: [
        'Network Theory Formulas (Complete)',
        'Signal Processing Transform Tables',
        'Communication Systems Formulas',
        'Electromagnetics Equations',
        'Control Systems Formulae'
      ],
      description: 'Important formulas and equations for quick revision',
      icon: '',
      folderLink:'https://drive.google.com/drive/folders/1ztNXiuKoobjr0ghGGqXwKS5dzjGPDHW-?usp=drive_link'
    },
    {
      id: 3,
      type: ' PYQs',
      items: [
        '2020-2024 Solved Papers',
        'Topic-wise Previous Questions',
        'Mock Test Series',
        'Practice Questions Bank',
        'Expected Questions 2025'
      ],
      description: 'Previous year questions with detailed solutions',
      icon: '',
      folderLink:'https://drive.google.com/drive/folders/1X1FIZ-DLTm1oq5hP3FJpNCJes0NZ85_u?usp=drive_link'
    },
    {
      id: 4,
      type: ' Study Notes',
      items: [
        'Handwritten Subject Notes',
        'Quick Revision Points',
        'Important Concepts Summary',
        'Problem Solving Techniques',
        'Exam Strategy Guide',
      ],
      description: 'Personalized study materials and strategies',
      icon: '',
      folderLink:'https://drive.google.com/drive/folders/1wUSH0NVeVzspq2LCI361FnR8kPjLXjCv?usp=drive_link'
    },
    {
      id: 5,
      type: ' Tools & Software',
      items: [
        'Circuit Simulators',
        'MATLAB for Signals',
        'CAD Tools for VLSI',
        'EM Simulation Software',
        'Communication Tools'
      ],
      description: 'Software and tools for ECE practicals',
      icon: '',
      // folderLink:'https://drive.google.com/drive/folders/1wh--9c-EwYNph3TJDiqja6iIuEtSJEMe?usp=drive_link'
      isToolPage:true,
    },
    {
      id: 6,
      type: ' Exam Strategy',
      items: [
        'Time Management Tips',
        'Question Selection Strategy',
        'Revision Techniques',
        'Last Minute Tips'
      ],
      description: 'Strategies for GATE exam success',
      icon: '',
      folderLink:'https://drive.google.com/drive/folders/1JpuVxWEe0Bk3nrSqLI9ySR4GNCq9PV9N?usp=drive_link'
    }
  ];

  // Math & Aptitude with details
  const mathAptitude = [
    {
      id: 1,
      category: 'Engineering Mathematics',
      weightage: '15%',
      topics: [
        'Linear Algebra: Matrices, Determinants, Eigen values',
        'Calculus: Limits, Continuity, Partial derivatives',
        'Vector Calculus: Gradient, Divergence, Curl theorems',
        'Complex Analysis: Analytic functions, Residue theorem',
        'Probability: Random variables, Distributions'
      ],
      important: 'Very High - Scoring section',
      chapters: 5,
      folderLink:'https://drive.google.com/drive/folders/10MzpjQgfgP4RsWLLy8A8JF3H64WwDsc_?usp=drive_link'
    },
    {
      id: 2,
      category: 'General Aptitude',
      weightage: '15%',
      topics: [
        'Verbal Ability: Grammar, Vocabulary, Comprehension',
        'Numerical Ability: Arithmetic, Algebra, Geometry',
        'Logical Reasoning: Puzzles, Data interpretation',
        'Quantitative Aptitude: Number systems, Percentages',
        'Data Sufficiency: Problem solving, Analysis',
        
      ],
      important: 'High - Common for all GATE papers',
       chapters: 5,
      folderLink:'https://drive.google.com/drive/folders/1CyaaptB3flEsNjD5TLhNpPMP7Ab7wu35?usp=drive_link'
    }
  ];

  // Quick Reference
  const quickReference = [
    { title: 'Total Questions', value: '65', detail: '65 questions total', icon: '' },
    { title: 'Total Marks', value: '100', detail: '100 marks maximum', icon: '' },
    { title: 'Exam Duration', value: '3h', detail: '180 minutes duration', icon: '' },
    { title: 'Negative Marking', value: '1/3', detail: 'For MCQs only', icon: '' },
    { title: 'Syllabus Topics', value: '45+', detail: 'Major topics covered', icon: '' },
    { title: 'Core Subjects', value: '9', detail: 'ECE core subjects', icon: '' }
  ];

  const toggleCourse = (id) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  const toggleResource = (id) => {
    setExpandedResource(expandedResource === id ? null : id);
  };

  const toggleMath = (id) => {
    console.log('toggleMath called with id :',id,'current expendedMath: ',expandedMath);
    setExpandedMath(expandedMath === id ? null : id);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log(`Searching for: ${searchTerm}`);
      const searchAlert = document.createElement('div');
      searchAlert.className = 'search-alert';
      searchAlert.innerHTML = `
        <div class="search-alert-content">
          <span class="search-alert-icon">🔍</span>
          <span>Searching for: <strong>${searchTerm}</strong></span>
        </div>
      `;
      document.body.appendChild(searchAlert);
      
      setTimeout(() => {
        if (document.body.contains(searchAlert)) {
          document.body.removeChild(searchAlert);
        }
      }, 3000);
      
      setSearchTerm('');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    if (showCalculator) {
      return <Calculator onClose={() => setShowCalculator(false)} 
      onOpenUnitConverter={() => handleNavigation('unit-converter')}
      />;
    }
    
    if (showSettings) {
      return <Setting 
        onClose={() => setShowSettings(false)} 
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
      />;
    }

    if (showUnitConverter) {
      return <UnitConverter onClose={() => setShowUnitConverter(false)} />;
    }
    
    if (showHelp) {
      return <Help onClose={() => setShowHelp(false)} />;
    }
    if (showGateInfo) {
      return <GateInfo onClose={() => setShowGateInfo(false)}
      initialSection={gateInfoSection} />;
    }
    if(showToolPage){
      return <ToolsPage onClose={() =>setShowToolPage(false)}/>
    }
    if (showAbout){
      return <AboutUs onClose={() =>setShowAbout(false)}/>;
    }
    if (showPrivacyPolicy){
      return <PrivacyPolicy onClose={()=>setShowPrivacyPolicy(false)}/>;
    }
    if (showTermsCondition){
      return <TermsConditions onClose={()=>setShowTermsCondition(false)}/>;
    }
    if (showArticles){
      return <Articles 
      onClose={() => setShowArticles(false)}
      onNavigateToBooks={() => {
      setShowBookPage(true);
      setShowArticles(false); // Close articles when navigating to books
    }}
    onNavigateToGateInfo={(section= 'pattern') => {
      setGateInfoSection(section);
      setShowGateInfo(true);
      setShowArticles(false); // Close articles when navigating to gate info
    }}
    onNavigateToEligibility={()=>{
      setShowEligibilityPage(true);
      setShowArticles(false);
    }}
    onNavigateToCutoff={() => {  // ADD THIS
      setShowCutoffPage(true);
      setShowArticles(false);
    }}

  />
    }
    if (showBookPage){
      return <BooksPage 
      onClose={()=>{
        setShowBookPage(false)
        setShowArticles(true);
      }}
      onNavigateToArticles={()=>setShowArticles(true)}

      />
    }
    if (showEligigibilityPage){
      return <EligibilityPage onClose={()=>setShowEligibilityPage(false)}/>;
    }
    if (showCutoffPage){
      return<CutoffPage onClose={()=> setShowCutoffPage(false)}/>
    }


    return (
      <main className="main">
        {/* Global Search Bar */}
        

        {/* Welcome Banner */}
        <section className="welcome-banner">
          <div className="banner-content">
             <div className="banner-text">
      <h2>Electronic Engineering Reference</h2>
      <p>Complete topic-wise guide </p>
    </div>
    <div className="banner-stats">
      <button 
        className="stat-chip gate-info-chip"
        onClick={() => handleNavigation('gate-info', 'pattern')}
      >
         GATE Exam Info
      </button>
      {/* <span className="stat-chip">Click cards →</span> */}
      {/* <span className="stat-chip">View topics ↓</span> */}
    </div>
  </div>
  <div className="circuit-dots"></div>
</section>

        {/* Course Weightage Section */}
        <section className="section weightage-section" id="courses">
          <h2 className="section-title">
            <span className="title-icon"></span>
            Course Weightage & Topics
            {/* <span className="title-tag"></span> */}
          </h2>
          <p className="section-subtitle">Click on any subject to see detailed topic information</p>
          
          <div className="weightage-grid">
            {courseWeightage.map((course) => (
              <div 
                key={course.id} 
                className={`weightage-card electronic-card ${expandedCourse === course.id ? 'expanded' : ''}`}
                onClick={(e) =>{
                e.preventDefault();
                toggleCourse(course.id)}}
                style={{ '--card-color': course.color }}
              >
                <div className="card-glow"></div>
                <div className="weightage-header">
                  <div className="course-info">
                    <h3>{course.course}</h3>
                    <div className="course-meta">
                      <span className="questions">
                        {/* <span className="meta-icon">❓</span> */}
                        {course.questions} questions
                      </span>
                      <span className={`importance ${course.importance.toLowerCase().replace(' ', '-')}`}>
                        {course.importance}
                      </span>
                    </div>
                  </div>
                  <div className="percentage-badge digital-badge">
                    {course.percentage}
                  </div>
                </div>
                
                <div className="progress-container">
                  <div 
                    className="progress-bar led-bar" 
                    style={{ width: course.percentage }}
                  >
                    <div className="led-scan"></div>
                  </div>
                </div>

                {expandedCourse === course.id && (
                  <div className="topic-details">
                    <div className="details-header">
                      <h4 className="details-title">
                        <span className="details-icon"></span>
                        Topics Covered
                      </h4>
                      <span className="topic-count">{course.topics.length} topics</span>
                    </div>
                    <ul className="topics-list">
                      {course.topics.map((topic, index) => (
                        <li key={index} className="topic-item electronic-item">
                          {/* <span className="topic-bullet electronic-bullet">⚫</span> */}
                          <span className="topic-text">{topic}</span>
                        </li>
                      ))}
                    </ul>

                    {/* {Add YOUYUBE BUTON HERE} */}

                      {course.youtubeLink &&(
                        <a
                        href={course.youtubeLink}
                        target='_blank'
                        rel='noopner noreferrer'
                        className='youtube-btn'
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          padding: '12px 20px',
                          background: '#FF0000',
                          color: 'white',
                          borderRadius: '10px',
                          textDecoration: 'none',
                          fontWeight: '600',
                          marginTop: '20px',
                          marginBottom: '15px',
                          width: '100%',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#CC0000';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = '#FF0000';
                          e.target.style.transform = 'translateY(0)'
                  
                        }}
                        >
                          <i className='fab fa-youtube' style={{fontSize:'1.2rem'}}></i>
                          Watch Youtube playlist
                        </a>
                      )}


                    {/* <div className="view-tip">
                      <span className="tip-icon">👆</span>
                      Click again to collapse
                    </div> */}
                  </div>
                )}

                {expandedCourse !== course.id && (
                  <div className="preview-hint">
                    <span className="hint-text">
                      <span className="hint-icon"></span>
                      Click to view topics
                    </span>
                    <span className="hint-arrow">▼</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Math & Aptitude Section */}
        <section className="section aptitude-section" id="math">
          <h2 className="section-title">
            {/* <span className="title-icon"></span> */}
            Mathematics & General Aptitude
            <span className="title-tag">30% Weight</span>
          </h2>
          
          <div className="aptitude-grid">
            {mathAptitude.map((section) => (
              <div 
                key={section.id}
                className={`aptitude-card electronic-card ${expandedMath === section.id ? 'expanded' : ''}`}
                onClick={() => toggleMath(section.id)}
              >
                <div className="card-glow"></div>
                <div className="aptitude-header">
                  <h3>{section.category}</h3>
                  <div className="weight-badge digital-badge">{section.weightage}</div>
                </div>
                
                <div className="importance-tag circuit-tag">
                  {/* <span className="tag-icon">🎯</span> */}
                  {section.important}
                </div>

                {expandedMath === section.id && (
                  <div className="aptitude-details">
                    <div className="details-header">
                      <h4>Topics Included:</h4>
                      <span className="chapter-count">{section.chapters} chapters</span>
                    </div>
                    <ul className="aptitude-topics">
                      {section.topics.map((topic, index) => (
                        <li key={index} className="topic-item electronic-item">
                          {/* <span className="topic-bullet electronic-bullet">▶</span> */}
                          {/* <span className='toipic-item '></span> */}
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Google Drive Access */}
                    <div className="aptitude-drive-access">
                      <div className="drive-access-header">
                        {/* <span className="drive-icon">📁</span> */}
                        <h4>Google Drive Folder</h4>
                      </div>
                      <p className="drive-info">
                        All study materials available in organized folder
                      </p>
                      <a 
                        href={section.folderLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aptitude-drive-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="btn-icon">🔗</span>
                        Open {section.category} Folder
                      </a>
                      {/* <div className="access-tip">
                        <span className="tip-icon">💡</span>
                        <span>Contains formulas, PYQs, notes, and practice problems</span>
                      </div> */}
                    </div>
                  </div>
                )}

                {expandedMath !== section.id && (
                  <div className="preview">
                    <span className="preview-icon"></span>
                    <span>Click to view topics</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
                <section className="section resources-section" id="resources">
          <h2 className="section-title">
            {/* <span className="title-icon">📁</span> */}
            Study Resources
            <span className="title-tag">Complete Kit</span>
          </h2>
          <p className="section-subtitle">All material uploaded in Google Drive Folders</p>
          
          <div className="resources-grid">
            {resources.map((resource) => (
              <div 
                key={resource.id}
                className={`resource-card electronic-card ${expandedResource === resource.id ? 'expanded' : ''} ${resource.type === '🔧 Tools & Software' ? 'tool-special-card' : ''}`}
                onClick={() => {
                  if (resource.type === ' Tools & Software') {
                    // Redirect to ToolsPage for Tools & Software
                    setShowToolPage(true);
                  } else {
                    // Normal behavior for other resources
                    toggleResource(resource.id);
                  }
                }}
              >
                <div className="card-glow"></div>
                <div className="resource-header">
                  <div>
                    <div className="resource-title">
                      <span className="resource-icon">{resource.icon}</span>
                      <h3>{resource.type}</h3>
                    </div>
                    <p className="resource-desc">{resource.description}</p>
                  </div>
                  {/* {resource.type === '🔧 Tools & Software' && (
                    <span className="tool-redirect-badge">
                      <span className="badge-icon">⚡</span>
                      Online Tools
                    </span>
                  )} */}
                </div>

                {expandedResource === resource.id && resource.type !== '🔧 Tools & Software' && (
                  <div className="resource-details">
                    <div className="details-header">
                      <h4>Available Materials:</h4>
                    </div>
                    <ul className="resource-list">
                      {resource.items.map((item, index) => (
                        <li key={index} className="resource-item electronic-item">
                          <span className="item-icon">📄</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="drive-folder-access">
                      <div className="drive-header">
                        <span className="drive-icon">📁</span>
                        <h4>Google Drive Access</h4>
                      </div>
                      <p className="drive-info-text">
                        All files are available in one organized Google Drive folder
                      </p>
                      <a 
                        href={resource.folderLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="drive-folder-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="btn-icon">🔗</span>
                        Open Google Drive Folder
                      </a>
                      {/* <div className="drive-tips">
                        <span className="tip-icon">💡</span>
                        <span>Tip: You can view, download, or add to your own Drive</span>
                      </div> */}
                    </div>
                  </div>
                )}

                {/* Special preview for Tools & Software card */}
                {resource.type === ' Tools & Software' ? (
                  <div className="tool-preview-content">
                    <div className="tool-features-showcase">
                      
                    </div>
                    <div className="tool-access-hint">
                      <div className="hint-content">
                        {/* <span className="hint-icon">🚀</span> */}
                        <div className="hint-text">
                          <span className="hint-title">Access Online Tools</span>
                          <span className="hint-subtitle">Click to explore all available tools</span>
                        </div>
                        <span className="hint-arrow">→</span>
                      </div>
                    </div>
                  </div>
                ) : expandedResource !== resource.id && (
                  <div className="resource-preview">
                    <span className="preview-icon">{resource.icon}</span>
                    <span>Contains study materials</span>
                    <span className="click-hint">
                      <span className="hint-icon"></span>
                      Click to view
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Quick Reference */}
        <section className="section reference-section" id="reference">
          <h2 className="section-title">
            {/* <span className="title-icon"></span> */}
            Quick Reference
            <span className="title-tag">GATE Facts</span>
          </h2>
          
          <div className="reference-cards">
            {quickReference.map((ref, index) => (
              <div key={index} className="ref-card electronic-card">
                <div className="ref-icon">{ref.icon}</div>
                <div className="ref-value digital-display">{ref.value}</div>
                <h3>{ref.title}</h3>
                <p>{ref.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Help Text */}
        <div className="help-section">
          <div className="circuit-board"></div>
          <p className="help-text">
            <span className="help-icon">🌐</span>
            <strong>Important:</strong> For official GATE information visit the  
            <a 
              href="https://gate.iitkgp.ac.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="official-link"
            >
              Official GATE Website <br></br>
            </a>
            https://gate.iitkgp.ac.in/ 
          </p>
        </div>

        {/* Calculator CTA */}
        <div className="calculator-cta">
            <div className="cta-content">
              <h3>GATE POST AND ARTICLES</h3>
              <p>The post & articles will encourage those wanting to explore GATE in the near future</p>
              <div className="cta-buttons">
                <button 
                  className="gate-info-btn"
                  onClick={() => setShowArticles(true)}
                >
                   POST & ARTICLES
                </button>
              </div>
            </div>
          </div>
      </main>
    );
  };

  return (
    <div className="app">
      <Header 
        setShowCalculator={() => handleNavigation('calculator')}
        setShowMaterials={() => handleNavigation('materials')}
        setShowSettings={() => handleNavigation('settings')}
        setShowUnitConverter={() => handleNavigation('unit-converter')}
        setShowHelp={() => handleNavigation('help')}
        setShowGateInfo={() => handleNavigation('gate-info','pattern')}
        setShowToolPage={()=>handleNavigation('tools')} 
        setShowAbout = {()=>handleNavigation('about')}
        setShowPrivacyPolicy={()=>handleNavigation('Privacy-Policy')}
        setShowTermsCondition={()=>handleNavigation('Term-conditions')}
        setShowArticles={()=>handleNavigation('articles')}
        handleNavigation={handleNavigation}
        onSearch={handleSearch}
        scrollToSection={scrollToSection}
        
/>

      {renderContent()}

      {/* Floating Calculator Button */}
      {/* {!showCalculator && !showSettings && !showUnitConverter && !showHelp && (
        <button 
          className="floating-calculator-btn"
          onClick={() => setShowCalculator(true)}
          title="Open Calculator"
        >
          🧮
        </button>
      )} */}

      {/* Footer */}
      <footer className="footer">
        <div className="circuit-line"></div>
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="chip-icon"></span>
              GATE ECE Reference
            </h3>
            <p>Electronic Engineering Interactive Guide</p>
            <div className="developer-info">
              {/* <p><span className="feature-icon">👨‍💻</span> Developer: Praseed </p> */}
        <div className="developer-links">
          <a 
            href="mailto:praseedkumar104@gmail.com"
            className="developer-link"
            title="Send Email"
          >
            📧 praseedkumar104@gmail.com
          </a>
          <a 
            href="https://github.com/Praseedkarn"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
            title="Visit GitHub"
          >
            🌐 GitHub.com/Praseedkarn
          </a>
        </div>
            </div>
          </div>
          <div className="footer-section">
            <h3>Features</h3>
            <p><span className="feature-icon"></span> Interactive Topic Details</p>
            <p><span className="feature-icon"></span> Subject-wise Weightage</p>
            <p><span className="feature-icon"></span> Calculator Tools</p>
            <p><span className="feature-icon"></span> Settings & Customization</p>
            <p><span className="feature-icon"></span> All info About GATE</p>
          </div>
          <div className="footer-section">
            <h3>Quick Access</h3>
            {/* <p><span className="nav-icon"></span> Click cards to expand</p> */}
            <button 
              className="footer-calc-link"
              onClick={() => setShowCalculator(true)}
            >
               Open Calculator
            </button>
            {/* <button 
              className="footer-settings-link"
              onClick={() => setShowSettings(true)}
            >
              ⚙️ Settings
            </button> */}
            <button 
              className="footer-unit-link"
              onClick={() => setShowUnitConverter(true)}
            >
               Unit Converter
            </button>
            <button 
              className="footer-help-link"
              onClick={() => setShowHelp(true)}
            >
               Help
            </button>
            <button 
              className="footer-gateInfo-link"
              onClick={() => setShowGateInfo(true)}
            >
              More info about GATE
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            <span className="copyright-icon">©</span>
            NotGATE-EC • December 2025
          </p>
          <p className="tech-note"></p>
        </div>
        <button 
        className='footer-about-link'
        onClick={() =>handleNavigation('about')}
        >About Us  
        </button>
        <button 
        className='footer-Privacy-link'
        onClick={() =>handleNavigation('Privacy-Policy')}
        >   Privacy Policy
        </button>
        <button 
        className='footer-TandC-link'
        onClick={() =>handleNavigation('Term-conditions')}
        > Terms & Conditions
        </button>
        {/* <button className='footer-cont'></button> */}
        <div className="circuit-line"></div>
      </footer>
      
    </div>
  );
}

export default App;