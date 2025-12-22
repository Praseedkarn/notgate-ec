import React from 'react';
import '../styles/CategoryPages.css';

function BooksPage({ onClose }) {
  const booksData = [
    {
      id: 1,
      topic: "Analog Circuits",
      bookName: "Microelectronic Circuits: Theory and Applications",
      edition: "Edition 6",
      author: "Adel S. Sedra, Kenneth C. Smith",
      description: "Comprehensive coverage of analog circuit design principles",
      importance: "High",
      amazonLink: "https://www.amazon.com/dp/0199339139",
      pdfLink: "https://drive.google.com/drive/folders/1sJQg9MSp69gQ2RfG85U1y6cSSUlkH2VS?usp=drive_link",
      color: "#8787c5"
    },
    {
      id: 2,
      topic: "Networks",
      bookName: "Fundamentals of Electric Circuits",
      edition: "Edition 5",
      author: "Charles K. Alexander, Matthew N. O. Sadiku",
      description: "Complete guide to circuit theory and network analysis",
      importance: "Very High",
      amazonLink: "https://www.amazon.com/dp/0073380571",
      pdfLink: "https://drive.google.com/drive/folders/1sJQg9MSp69gQ2RfG85U1y6cSSUlkH2VS?usp=drive_link",
      color: "#8787c5"
    },
    {
      id: 3,
      topic: "Control Systems",
      bookName: "Automatic Control Systems",
      edition: "Edition 9",
      author: "Benjamin C. Kuo",
      description: "Standard textbook for control systems engineering",
      importance: "High",
      amazonLink: "https://www.amazon.com/dp/0470048964",
      pdfLink: "https://drive.google.com/drive/folders/1sJQg9MSp69gQ2RfG85U1y6cSSUlkH2VS?usp=drive_link",
      color: "#8787c5"
    },
    {
      id: 4,
      topic: "Signals & Systems",
      bookName: "Signals & Systems",
      edition: "Edition 2",
      author: "Alan V. Oppenheim, Alan S.Willsky, S.Hamid Nawab",
      description: "Classic textbook for signals and systems analysis",
      importance: "Very High",
      amazonLink: "https://www.amazon.com/dp/0138147574",
      pdfLink: "https://drive.google.com/drive/folders/1sJQg9MSp69gQ2RfG85U1y6cSSUlkH2VS?usp=drive_link",
      color: "#8787c5"
    },
    {
      id: 5,
      topic: "Digital Circuits",
      bookName: "Digital Logic and Computer Design",
      edition: "Edition 1",
      author: "M. Morris Mano",
      description: "Essential for digital electronics and logic design",
      importance: "High",
      amazonLink: "https://www.amazon.com/dp/0132774208",
      pdfLink: "https://drive.google.com/drive/folders/1sJQg9MSp69gQ2RfG85U1y6cSSUlkH2VS?usp=drive_link",
      color: "#8787c5"
    },
    {
      id: 6,
      topic: "Electromagnetics",
      bookName: "Principles of Electromagnetics",
      edition: "Edition 4",
      author: "Mathew N.O. Sadiku",
      description: "Complete guide to electromagnetic theory",
      importance: "Medium",
      amazonLink: "https://www.amazon.com/dp/0199321388",
      pdfLink: "https://drive.google.com/drive/folders/1sJQg9MSp69gQ2RfG85U1y6cSSUlkH2VS?usp=drive_link",
      color: "#8787c5"
    },
    {
      id: 7,
      topic: "Electronic Devices and Circuits",
      bookName: "Semiconductor Physics and Devices",
      edition: "Edition 4",
      author: "Donald A. Neaman, Dhrubes Biswas",
      description: "Comprehensive semiconductor physics and device operation",
      importance: "High",
      amazonLink: "https://www.amazon.com/dp/0073529583",
      pdfLink: "https://drive.google.com/drive/folders/1sJQg9MSp69gQ2RfG85U1y6cSSUlkH2VS?usp=drive_link",
      color: "#8787c5"
    },
    {
      id: 8,
      topic: "Analog and Digital Communication",
      bookName: "Principles of Communication Systems",
      edition: "Edition 3",
      author: "Goutam Saha, Herbert Taub, Donald Schilling",
      description: "Complete communication systems textbook",
      importance: "Very High",
      amazonLink: "https://www.amazon.com/dp/0070648115",
      pdfLink: "https://drive.google.com/drive/folders/1sJQg9MSp69gQ2RfG85U1y6cSSUlkH2VS?usp=drive_link",
      color: "#8787c5"
    },
    {
      id: 9,
      topic: "Engineering Mathematics",
      bookName: "Higher Engineering Mathematics",
      edition: "Edition 43",
      author: "B. S. Grewal",
      description: "Most recommended mathematics book for GATE",
      importance: "Very High",
      amazonLink: "https://www.amazon.com/dp/938617344X",
      pdfLink: "https://drive.google.com/drive/folders/1sJQg9MSp69gQ2RfG85U1y6cSSUlkH2VS?usp=drive_link",
      color: "#8787c5"
    }
  ];

  const additionalBooks = [
    {
      title: "Quantitative Aptitude For Competitive Examinations",
      author: "R.S. Aggarwal",
      edition: "Edition 7",
      purpose: "Quantitative Aptitude",
      color: "#FF5722"
    },
    {
      title: "A Modern Approach to Verbal & Non-Verbal Reasoning",
      author: "R.S. Aggarwal",
      edition: "Revised Edition",
      purpose: "Verbal & Non-Verbal Reasoning",
      color: "#E91E63"
    },
    {
      title: "GATE ECE Complete CLASS NOTES For GATE 2025",
      author: "Made Easy / Ace Academy",
      edition: "2025 Edition",
      purpose: "Complete Study Material",
      color: "#00BCD4"
    }
  ];

  const quickLinks = [
    {
      title: "GATE  ECE Question Paper PDF",
      description: "Download previous year question papers",
      link: "https://drive.google.com/drive/folders/1X1FIZ-DLTm1oq5hP3FJpNCJes0NZ85_u?usp=drive_link",
      icon: "📄"
    },
    {
      title: "Syllabus for GATE ECE Exam 2024",
      description: "Complete subject-wise syllabus",
      link: "#",
      icon: "📋"
    },
    {
      title: "Video Lectures",
      description: "Free YouTube playlists",
      link: "https://www.youtube.com/@gatewallah_ee_ec_cs_in",
      icon: "🎥"
    }
  ];

  const handleBookClick = (book) => {
    if (book.amazonLink) {
      window.open(book.amazonLink, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Viewing: ${book.bookName}\nAuthor: ${book.author}`);
    }
  };

  const handleDownloadClick = (book, e) => {
    e.stopPropagation();
    if (book.pdfLink === "#") {
      alert(`PDF for "${book.bookName}" would be downloaded\n\nNote: Always buy original books to support authors!`);
    } else {
      window.open(book.pdfLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="category-page-wrapper">
      {/* Header Section */}
      <section className="category-header-section">
        <div className="category-container">
          <h1 className="category-main-title">📚 Best Books for GATE 2025 - ECE</h1>
          <p className="category-subtitle">
            Electronics & Communication Engineering - Highly recommended and best books for GATE 2025
          </p>
          <div className="category-divider"></div>
          
          <button className="category-back-btn" onClick={onClose}>
            <i className="fas fa-arrow-left"></i> Back to Home
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="category-main-content">
        <div className="category-container">
          <div className="category-content-wrapper">
            {/* Books Section */}
            <div className="category-main-section">
              <div className="category-section-header">
                <h2 className="category-section-title">
                  <i className="fas fa-book-open"></i> GATE ECE Recommended Books
                </h2>
                <div className="section-subtitle">
                  Complete book list with authors and importance rating
                </div>
              </div>

              {/* Books Grid */}
              <div className="books-grid">
                {booksData.map((book) => (
                  <div 
                    key={book.id} 
                    className="book-card"
                    onClick={() => handleBookClick(book)}
                    style={{ '--book-color': book.color }}
                  >
                    <div className="book-card-header">
                      <div className="book-topic">
                        <span className="topic-badge" style={{backgroundColor: book.color}}>
                          {book.topic}
                        </span>
                        <span className={`importance-badge ${book.importance.toLowerCase().replace(' ', '-')}`}>
                          {book.importance}
                        </span>
                      </div>
                    </div>

                    <div className="book-card-body">
                      <h3 className="book-title">{book.bookName}</h3>
                      <div className="book-edition">{book.edition}</div>
                      
                      <div className="book-author">
                        <i className="fas fa-user-edit"></i>
                        <span>{book.author}</span>
                      </div>
                      
                      <p className="book-description">{book.description}</p>
                    </div>

                    <div className="book-card-footer">
                      <button 
                        className="book-action-btn buy-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(book.amazonLink, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <i className="fab fa-amazon"></i> Buy on Amazon
                      </button>
                      
                      <button 
                        className="book-action-btn view-btn"
                        onClick={(e) => handleDownloadClick(book, e)}
                      >
                        <i className="fas fa-download"></i> View PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Books Section */}
              <div className="additional-section">
                <h3 className="additional-title">
                  <i className="fas fa-star"></i> Additional Recommended Books
                </h3>
                
                <div className="additional-books-grid">
                  {additionalBooks.map((book, index) => (
                    <div key={index} className="additional-book-card">
                      <div className="additional-book-header">
                        <span className="additional-book-purpose">{book.purpose}</span>
                      </div>
                      <h4 className="additional-book-title">{book.title}</h4>
                      <div className="additional-book-info">
                        <span className="additional-book-author">
                          <i className="fas fa-user"></i> {book.author}
                        </span>
                        <span className="additional-book-edition">{book.edition}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

             
            </div>

            {/* Sidebar */}
            <aside className="category-sidebar">
              {/* Quick Links */}
              <div className="category-sidebar-widget">
                <h3 className="category-widget-title">
                  <i className="fas fa-link"></i> Quick Links
                </h3>
                <div className="category-quick-links">
                  {quickLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.link}
                      className="category-quick-link"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`${link.title} would open\n${link.description}`);
                      }}
                    >
                      <span className="link-icon">{link.icon}</span>
                      <div className="link-content">
                        <div className="link-title">{link.title}</div>
                        <div className="link-desc">{link.description}</div>
                      </div>
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BooksPage;