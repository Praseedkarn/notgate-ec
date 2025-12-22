import React, { useState, useEffect } from 'react';
import '../styles/Setting.css';

const Settings = ({ onClose, currentTheme, onThemeChange }) => {
  // Initialize settings from localStorage or use currentTheme prop
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('gate-ece-settings');
    if (saved) {
      return JSON.parse(saved);
    } else {
      return {
        theme: currentTheme || 'light', // Default to light theme
        fontSize: 'medium',
        animations: true,
        showNotifications: true,
        autoSaveNotes: true,
        defaultCalculator: 'scientific',
        downloadQuality: 'high',
        language: 'english',
        offlineAccess: false
      };
    }
  });

  // Apply theme WITHOUT removing all classes
  const applyTheme = (themeName) => {
    // Remove only theme classes, not all classes
    document.body.classList.remove('dark-mode', 'light-mode', 'blue-theme', 'electronic-theme');
    
    // Add the selected theme class - FIXED: Added specific check for electronic
    if (themeName === 'electronic') {
      document.body.classList.add('electronic-theme');
    } else if (themeName === 'dark') {
      document.body.classList.add('dark-mode');
    } else if (themeName === 'light') {
      document.body.classList.add('light-mode');
    } else if (themeName === 'blue') {
      document.body.classList.add('blue-theme');
    } else {
      document.body.classList.add('light-mode'); // Default fallback
    }
    
    // Notify parent component about theme change
    if (onThemeChange) {
      onThemeChange(themeName);
    }
  };

  // Apply theme when settings change
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('gate-ece-settings', JSON.stringify(settings));
    
    // Apply font size
    const fontSize = settings.fontSize === 'small' ? '14px' :
                     settings.fontSize === 'large' ? '18px' : '16px';
    document.documentElement.style.fontSize = fontSize;
    
  }, [settings]);

  // Apply theme on component mount
  useEffect(() => {
    // Only apply if theme is different from current
    const currentBodyTheme = document.body.classList.contains('dark-mode') ? 'dark' :
                            document.body.classList.contains('light-mode') ? 'light' :
                            document.body.classList.contains('blue-theme') ? 'blue' :
                            document.body.classList.contains('electronic-theme') ? 'electronic' : 'light';
    
    if (currentBodyTheme !== settings.theme) {
      applyTheme(settings.theme);
    }
  }, []);

  const handleChange = (setting, value) => {
    const newSettings = {
      ...settings,
      [setting]: value
    };
    setSettings(newSettings);
    
    // Apply theme immediately if it's a theme change
    if (setting === 'theme') {
      applyTheme(value);
    }
  };

  const handleReset = () => {
    const defaultSettings = {
      theme: 'light', // Reset to light theme
      fontSize: 'medium',
      animations: true,
      showNotifications: true,
      autoSaveNotes: true,
      defaultCalculator: 'scientific',
      downloadQuality: 'high',
      language: 'english',
      offlineAccess: false
    };
    
    setSettings(defaultSettings);
    applyTheme('light'); // Apply light theme
    alert('Settings reset to default!');
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
    if (onClose) onClose();
  };

  const handleClearCache = () => {
    console.log("Clearing cache...");
    
    // Show confirmation dialog
    const confirmed = window.confirm("Are you sure you want to clear the cache?");
    
    if (confirmed) {
      // Clear local storage cache
      localStorage.removeItem('calculator-history');
      localStorage.removeItem('app-settings');
      localStorage.removeItem('user-preferences');
      
      // Clear session storage
      sessionStorage.clear();
      
      // Show success message
      alert("Cache cleared successfully!");
    }
  };

  const themes = [
    { id: 'light', name: 'Light Mode', icon: '☀️', desc: 'Default light theme' },
    { id: 'electronic', name: 'Electronic Theme', icon: '⚡', desc: 'Electronic style with dark blue' },
    { id: 'dark', name: 'Dark Mode', icon: '🌙', desc: 'Pure dark theme' },
  ];

  const fontSizes = [
    { id: 'small', name: 'Small', desc: 'More content on screen' },
    { id: 'medium', name: 'Medium', desc: 'Balanced readability' },
    { id: 'large', name: 'Large', desc: 'Better for reading' }
  ];

  const calculatorTypes = [
    { id: 'scientific', name: 'Scientific Calculator', icon: '🧮', desc: 'Advanced calculations' },
    { id: 'simple', name: 'Simple Calculator', icon: '📱', desc: 'Basic operations' }
  ];

  // Load settings on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('gate-ece-settings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      // Apply the saved theme
      applyTheme(parsedSettings.theme);
    }
  }, []);

  return (
    <div className="settings-page">
      {/* Settings Header */}
      <div className="settings-header">
        <div className="header-left">
          <button onClick={onClose} className="back-btn" title="Back">
            ←
          </button>
          <div className="header-title">
            <span className="settings-icon">⚙️</span>
            <h1>Settings</h1>
            <span className="settings-badge">GATE ECE Prep</span>
          </div>
        </div>
        <div className="header-actions">
          <button onClick={handleReset} className="reset-btn" title="Reset to default">
            🔄 Reset
          </button>
          <button onClick={handleSave} className="save-btn" title="Save settings">
            💾 Save
          </button>
        </div>
      </div>

      {/* Settings Content */}
      <div className="settings-content">
        {/* App Theme */}
        <div className="settings-section">
          <div className="section-header">
            <h2>🎨 App Theme</h2>
            {/* <p>Choose your preferred visual style</p>
            <div className="current-theme-indicator">
              Current: <strong>{settings.theme === 'light' ? 'Light Mode' : 
                              settings.theme === 'electronic' ? 'Electronic Theme' : 
                              settings.theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</strong>
            </div> */}
          </div>
          <div className="theme-options">
            {themes.map(theme => (
              <button
                key={theme.id}
                className={`theme-card ${settings.theme === theme.id ? 'active' : ''}`}
                onClick={() => handleChange('theme', theme.id)}
                title={theme.desc}
              >
                <span className="theme-icon">{theme.icon}</span>
                <span className="theme-name">{theme.name}</span>
                {settings.theme === theme.id && (
                  <span className="selected-badge">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Text Size */}
        <div className="settings-section">
          <div className="section-header">
            <h2>📝 Text Size</h2>
            <p>Adjust text size for better readability</p>
          </div>
          <div className="size-options">
            {fontSizes.map(size => (
              <button
                key={size.id}
                className={`size-card ${settings.fontSize === size.id ? 'active' : ''}`}
                onClick={() => handleChange('fontSize', size.id)}
                title={size.desc}
              >
                <span className="size-name">{size.name}</span>
                <span className="size-desc">{size.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Download Quality */}
        <div className="settings-section">
          <div className="section-header">
            <h2>📥 Download Quality</h2>
            <p>Choose quality for downloaded materials</p>
          </div>
          <div className="quality-options">
            {[
              { id: 'low', name: 'Low', desc: 'Smaller files, faster download' },
              { id: 'medium', name: 'Medium', desc: 'Balanced quality and size' },
              { id: 'high', name: 'High', desc: 'Best quality, larger files' }
            ].map(quality => (
              <button
                key={quality.id}
                className={`quality-card ${settings.downloadQuality === quality.id ? 'active' : ''}`}
                onClick={() => handleChange('downloadQuality', quality.id)}
                title={quality.desc}
              >
                <span className="quality-name">{quality.name}</span>
                <span className="quality-desc">{quality.desc}</span>
                {settings.downloadQuality === quality.id && (
                  <span className="selected-badge">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Language */}
        <div className="settings-section">
          <div className="section-header">
            <h2>🌐 Language</h2>
            <p>Select your preferred language</p>
          </div>
          <div className="language-select">
            <select
              value={settings.language}
              onChange={(e) => handleChange('language', e.target.value)}
              className="language-dropdown"
            >
              <option value="english">🇺🇸 English</option>
            </select>
          </div>
        </div>

        {/* App Info */}
        <div className="settings-section app-info">
          <div className="section-header">
            <h2>ℹ️ App Information</h2>
          </div>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Version</span>
              <span className="info-value">2.2.0</span>
            </div>
            <div className="info-item">
              <span className="info-label">Last Updated</span>
              <span className="info-value">22 Dec 2025</span>
            </div>
            
          </div>
          <div className="app-actions">
            <button className="action-btn clear-btn" title="Clear cache" onClick={handleClearCache}>
              🗑️ Clear Cache
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="quick-btn" onClick={handleSave} title="Save and close">
          💾 Save & Close
        </button>
        <button className="quick-btn" onClick={onClose} title="Cancel">
          ❌ Cancel
        </button>
        <button className="quick-btn reset-all-btn" onClick={handleReset} title="Reset all">
          🔄 Reset All
        </button>
      </div>
    </div>
  );
};

export default Settings;