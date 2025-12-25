import React from 'react';
import '../styles/Aboutus.css';

const AboutUs = ({ onClose }) => {
  return (
    <div className="about-page">
      {/* Back Button */}
      <button 
        className="about-back-btn"
        onClick={onClose}
      >
        <i className="fas fa-arrow-left"></i>
        Back
      </button>

      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h1>About NotGate</h1>
          <p className="about-subtitle">Our Story & Mission</p>
        </div>

        {/* Content */}
        <div className="about-content-card">
          {/* Problem Statement */}
          <div className="about-section">
            <h2>Why We Started</h2>
            {/* <p className="about-paragraph">
              <strong>I started NotGate</strong> because as a GATE ECE aspirant myself, I experienced firsthand 
              how scattered and disorganized preparation resources are across the internet. Students waste 
              precious time searching for materials instead of studying.
            </p> */}
            <p>Just for time pass</p>
          </div>

          {/* Journey to Solution */}
          <div className="about-section">
            {/* <h2>Our Journey</h2> */}
            {/* <p className="about-paragraph">
              That's why I built a centralized platform where every GATE ECE resource is organized by 
              subject weightage, topic importance, and exam relevance. What began as a personal 
              study tool evolved into a complete preparation ecosystem with calculators, simulators, 
              and structured study plans.
            </p> */}
          </div>

          {/* Milestones */}
          <div className="about-section">
            {/* <h2>Our Progress</h2> */}
            <div className="milestones">
              <div className="milestone">
                {/* <div className="milestone-number">1,000+</div> */}
                {/* <div className="milestone-text">Students Helped</div> */}
              </div>
              <div className="milestone">
                {/* <div className="milestone-number">9</div> */}
                {/* <div className="milestone-text">Subjects Covered</div> */}
              </div>
              <div className="milestone">
                {/* <div className="milestone-number">100%</div> */}
                {/* <div className="milestone-text">Free Resources</div> */}
              </div>
            </div>
            {/* <p className="about-paragraph">
              Along the way, we've helped thousands of students access organized study materials, 
              received positive feedback from across India, and continuously expanded our toolset 
              based on real student needs.
            </p> */}
          </div>

          {/* Mission Forward */}
          <div className="about-section">
            {/* <h2>Our Mission</h2> */}
            {/* <p className="about-paragraph">
              We want to be the most trusted and comprehensive GATE ECE preparation platform in India, 
              making high-quality education accessible to every student regardless of their background 
              or location.
            </p> */}
            
            <div className="mission-points">
              <div className="mission-point">
                <i className="fas fa-check-circle"></i>
                {/* <span>Keep all core content completely free</span> */}
              </div>
              <div className="mission-point">
                <i className="fas fa-check-circle"></i>
                {/* <span>Add more interactive learning tools</span> */}
              </div>
              <div className="mission-point">
                <i className="fas fa-check-circle"></i>
                {/* <span>Expand to more engineering branches</span> */}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="contact-section">
            {/* <h3>Get in Touch</h3> */}
            <p className="contact-info">
              Created by <strong>Praseed</strong><br />
              Email: <strong>notgate.ec@gmail.com</strong>
            </p>
            {/* <p className="support-text">
              Support this student-run project:
              <a 
                href="https://buymeacoffee.com/praseed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="support-link"
              >
                <i className="fas fa-coffee"></i>
                Buy Me a Coffee
              </a>
            </p> */}
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;