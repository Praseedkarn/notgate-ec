import React from 'react';
import '../styles/TopicCard.css';

const ArticleCard = ({ article, onClick }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'Books': '#8787c5',
      'Pattern': '#8787c5',
      'Eligibility': '#8787c5',
      'Application': '#8787c5',
      'Cutoff': '#8787c5',
      'Strategy': '#8787c5',
      'PYQs': '#8787c5',
      'Default': '#8787c5'
    };
    return colors[category] || colors['Default'];
  };

  const categoryColor = getCategoryColor(article.category);

  return (
    <div className={`article-card ${article.isFeatured ? 'featured' : ''}`} onClick={onClick}>
      <div className="article-header">
        <div className="category-tag" style={{ backgroundColor: categoryColor }}>
          {article.category}
        </div>
        {article.updatedDate && (
          <div className="update-date">
            <i className="far fa-calendar-alt"></i> Updated: {article.updatedDate}
          </div>
        )}
      </div>
      
      <div className="article-body">
        <h3 className="article-title">{article.title}</h3>
        
        {article.description && (
          <p className="article-description">{article.description}</p>
        )}
        
        {!article.description && article.isExternalLink && (
          <div className="external-link-box">
            <i className="fas fa-external-link-alt"></i>
            <span>{article.linkText}</span>
          </div>
        )}
      </div>
      
      <div className="article-footer">
        <button 
          className={`article-link-btn ${article.isExternalLink ? 'external' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          {article.linkText}
          {article.isExternalLink ? (
            <i className="fas fa-external-link-alt"></i>
          ) : (
            <i className="fas fa-arrow-right"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;