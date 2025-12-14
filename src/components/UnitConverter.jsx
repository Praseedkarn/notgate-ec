import React, { useState } from 'react';
import '../styles/UnitConverter.css';

const UnitConverter = ({ onClose }) => {
  const [category, setCategory] = useState('decibel');
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('dBm');
  const [toUnit, setToUnit] = useState('mW');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  // Unit definitions by category
  const unitCategories = {
    decibel: {
      name: 'Decibel Conversions',
      units: ['dBm', 'mW', 'W', 'dBW', 'dBV', 'V', 'dBµV', 'µV'],
      conversions: {
        // dBm to other units
        'dBm→mW': (val) => Math.pow(10, val / 10),
        'dBm→W': (val) => Math.pow(10, val / 10) / 1000,
        'dBm→dBW': (val) => val - 30,
        'dBm→dBV': (val) => val + 13.01,
        'dBm→V': (val) => Math.sqrt(50) * Math.pow(10, val / 20) / 1000,
        'dBm→dBµV': (val) => val + 107,
        'dBm→µV': (val) => 1000000 * Math.sqrt(50) * Math.pow(10, val / 20) / 1000,
        
        // mW to other units
        'mW→dBm': (val) => 10 * Math.log10(val),
        'mW→W': (val) => val / 1000,
        'mW→dBW': (val) => 10 * Math.log10(val / 1000),
        
        // W to other units
        'W→dBm': (val) => 10 * Math.log10(val * 1000),
        'W→mW': (val) => val * 1000,
        'W→dBW': (val) => 10 * Math.log10(val),
        
        // dBW to other units
        'dBW→dBm': (val) => val + 30,
        'dBW→W': (val) => Math.pow(10, val / 10),
        'dBW→mW': (val) => Math.pow(10, val / 10) * 1000,
        
        // dBV to other units
        'dBV→V': (val) => Math.pow(10, val / 20),
        'dBV→dBµV': (val) => val + 120,
        
        // V to other units
        'V→dBV': (val) => 20 * Math.log10(val),
        'V→dBm': (val) => 10 * Math.log10(Math.pow(val, 2) / 50 * 1000),
        
        // dBµV to other units
        'dBµV→µV': (val) => Math.pow(10, val / 20),
        'dBµV→dBm': (val) => val - 107,
        
        // µV to other units
        'µV→dBµV': (val) => 20 * Math.log10(val),
        'µV→dBm': (val) => 20 * Math.log10(val / 1000000) + 13.01
      }
    },
    
    frequency: {
      name: 'Frequency & Time',
      units: ['Hz', 'kHz', 'MHz', 'GHz', 'THz', 's', 'ms', 'µs', 'ns'],
      conversions: {
        'Hz→kHz': (val) => val / 1000,
        'Hz→MHz': (val) => val / 1000000,
        'Hz→GHz': (val) => val / 1000000000,
        'Hz→THz': (val) => val / 1000000000000,
        'kHz→Hz': (val) => val * 1000,
        'kHz→MHz': (val) => val / 1000,
        'MHz→Hz': (val) => val * 1000000,
        'MHz→GHz': (val) => val / 1000,
        'GHz→MHz': (val) => val * 1000,
        'GHz→Hz': (val) => val * 1000000000,
        's→ms': (val) => val * 1000,
        's→µs': (val) => val * 1000000,
        's→ns': (val) => val * 1000000000,
        'ms→s': (val) => val / 1000,
        'ms→µs': (val) => val * 1000,
        'µs→s': (val) => val / 1000000,
        'µs→ns': (val) => val * 1000,
        'ns→s': (val) => val / 1000000000,
        'ns→µs': (val) => val / 1000
      }
    },
    
    digital: {
      name: 'Digital & Data',
      units: ['bit', 'kbit', 'Mbit', 'Gbit', 'Byte', 'kB', 'MB', 'GB', 'bps', 'kbps', 'Mbps', 'Gbps'],
      conversions: {
        'bit→Byte': (val) => val / 8,
        'Byte→bit': (val) => val * 8,
        'kbit→bit': (val) => val * 1024,
        'Mbit→kbit': (val) => val * 1024,
        'Gbit→Mbit': (val) => val * 1024,
        'kB→Byte': (val) => val * 1024,
        'MB→kB': (val) => val * 1024,
        'GB→MB': (val) => val * 1024,
        'bps→kbps': (val) => val / 1000,
        'kbps→bps': (val) => val * 1000,
        'Mbps→kbps': (val) => val * 1000,
        'Gbps→Mbps': (val) => val * 1000
      }
    },
    
    resistance: {
      name: 'Resistance & Impedance',
      units: ['Ω', 'kΩ', 'MΩ', 'mΩ', 'nS', 'µS', 'mS', 'S'],
      conversions: {
        'Ω→kΩ': (val) => val / 1000,
        'Ω→MΩ': (val) => val / 1000000,
        'Ω→mΩ': (val) => val * 1000,
        'kΩ→Ω': (val) => val * 1000,
        'kΩ→MΩ': (val) => val / 1000,
        'MΩ→Ω': (val) => val * 1000000,
        'MΩ→kΩ': (val) => val * 1000,
        'mΩ→Ω': (val) => val / 1000,
        'S→mS': (val) => val * 1000,
        'S→µS': (val) => val * 1000000,
        'S→nS': (val) => val * 1000000000,
        'mS→S': (val) => val / 1000,
        'µS→S': (val) => val / 1000000,
        'nS→S': (val) => val / 1000000000
      }
    },
    
    capacitance: {
      name: 'Capacitance & Inductance',
      units: ['F', 'mF', 'µF', 'nF', 'pF', 'H', 'mH', 'µH', 'nH', 'pH'],
      conversions: {
        'F→mF': (val) => val * 1000,
        'F→µF': (val) => val * 1000000,
        'F→nF': (val) => val * 1000000000,
        'F→pF': (val) => val * 1000000000000,
        'mF→F': (val) => val / 1000,
        'µF→F': (val) => val / 1000000,
        'µF→nF': (val) => val * 1000,
        'nF→F': (val) => val / 1000000000,
        'nF→pF': (val) => val * 1000,
        'pF→F': (val) => val / 1000000000000,
        'H→mH': (val) => val * 1000,
        'H→µH': (val) => val * 1000000,
        'H→nH': (val) => val * 1000000000,
        'H→pH': (val) => val * 1000000000000,
        'mH→H': (val) => val / 1000,
        'µH→H': (val) => val / 1000000,
        'µH→nH': (val) => val * 1000,
        'nH→H': (val) => val / 1000000000,
        'nH→pH': (val) => val * 1000
      }
    },
    
    power: {
      name: 'Power & Energy',
      units: ['W', 'kW', 'MW', 'GW', 'dBW', 'dBm', 'J', 'kJ', 'MJ', 'kWh'],
      conversions: {
        'W→kW': (val) => val / 1000,
        'W→MW': (val) => val / 1000000,
        'W→GW': (val) => val / 1000000000,
        'kW→W': (val) => val * 1000,
        'kW→MW': (val) => val / 1000,
        'MW→W': (val) => val * 1000000,
        'MW→GW': (val) => val / 1000,
        'GW→W': (val) => val * 1000000000,
        'J→kJ': (val) => val / 1000,
        'J→MJ': (val) => val / 1000000,
        'kJ→J': (val) => val * 1000,
        'kJ→MJ': (val) => val / 1000,
        'MJ→J': (val) => val * 1000000,
        'kWh→J': (val) => val * 3600000,
        'J→kWh': (val) => val / 3600000
      }
    }
  };

  const handleConvert = () => {
    if (!inputValue || isNaN(parseFloat(inputValue))) {
      setResult('Please enter a valid number');
      return;
    }

    const numValue = parseFloat(inputValue);
    const conversionKey = `${fromUnit}→${toUnit}`;
    
    let convertedValue;
    
    if (fromUnit === toUnit) {
      convertedValue = numValue;
    } else if (unitCategories[category].conversions[conversionKey]) {
      convertedValue = unitCategories[category].conversions[conversionKey](numValue);
    } else {
      // Try indirect conversion through base unit
      const baseUnit = getBaseUnit(category, fromUnit);
      if (baseUnit) {
        const toBase = unitCategories[category].conversions[`${fromUnit}→${baseUnit}`];
        const fromBase = unitCategories[category].conversions[`${baseUnit}→${toUnit}`];
        if (toBase && fromBase) {
          convertedValue = fromBase(toBase(numValue));
        } else {
          setResult(`Conversion not available from ${fromUnit} to ${toUnit}`);
          return;
        }
      } else {
        setResult(`Conversion not available from ${fromUnit} to ${toUnit}`);
        return;
      }
    }

    // Format the result
    const formattedResult = formatNumber(convertedValue);
    setResult(`${inputValue} ${fromUnit} = ${formattedResult} ${toUnit}`);
    
    // Add to history
    const historyEntry = {
      from: `${inputValue} ${fromUnit}`,
      to: `${formattedResult} ${toUnit}`,
      category: unitCategories[category].name,
      timestamp: new Date().toLocaleTimeString()
    };
    
    setHistory(prev => [historyEntry, ...prev.slice(0, 9)]);
  };

  const getBaseUnit = (cat, unit) => {
    const bases = {
      decibel: 'dBm',
      frequency: 'Hz',
      digital: 'bit',
      resistance: 'Ω',
      capacitance: 'F',
      power: 'W'
    };
    return bases[cat];
  };

  const formatNumber = (num) => {
    if (Math.abs(num) < 0.000001) {
      return num.toExponential(6);
    }
    if (Math.abs(num) < 0.01) {
      return num.toFixed(8);
    }
    if (Math.abs(num) < 1) {
      return num.toFixed(6);
    }
    if (Math.abs(num) < 1000) {
      return num.toFixed(4);
    }
    if (Math.abs(num) < 1000000) {
      return num.toFixed(2);
    }
    if (Math.abs(num) >= 1000000000) {
      return num.toExponential(4);
    }
    return num.toLocaleString(undefined, { maximumFractionDigits: 4 });
  };

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setResult(null);
  };

  const handleClear = () => {
    setInputValue('');
    setResult(null);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Show a toast notification (you can implement this)
    alert('Copied to clipboard!');
  };

  const getUnitDescription = (unit) => {
    const descriptions = {
      'dBm': 'Decibels relative to 1 milliwatt',
      'mW': 'Milliwatts',
      'W': 'Watts',
      'dBW': 'Decibels relative to 1 watt',
      'V': 'Volts',
      'dBV': 'Decibels relative to 1 volt',
      'Hz': 'Hertz (cycles per second)',
      'kHz': 'Kilohertz',
      'MHz': 'Megahertz',
      'GHz': 'Gigahertz',
      'bit': 'Binary digit',
      'Byte': '8 bits',
      'bps': 'Bits per second',
      'Ω': 'Ohms (resistance)',
      'S': 'Siemens (conductance)',
      'F': 'Farads (capacitance)',
      'H': 'Henries (inductance)',
      'J': 'Joules (energy)',
      'kWh': 'Kilowatt-hour'
    };
    return descriptions[unit] || unit;
  };

  return (
    <div className="unit-converter-overlay">
      <div className="unit-converter-container">
        {/* Header matching Calculator style */}
        <div className="unit-converter-header">
          <div className="header-top">
            <button className="back-home-btn" onClick={onClose}>
              <span className="back-arrow">←</span>
              <span className="back-text">Back to Home</span>
            </button>
            <div className="header-main">
              <h1>
                <span className="converter-icon">🔧</span>
                ECE Unit Converter
              </h1>
              <p>Convert between electronic engineering units with precision</p>
            </div>
          </div>

          {/* Category Tabs matching Calculator tabs */}
          <div className="converter-tabs">
            {Object.keys(unitCategories).map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${category === cat ? 'active' : ''}`}
                onClick={() => {
                  setCategory(cat);
                  setFromUnit(unitCategories[cat].units[0]);
                  setToUnit(unitCategories[cat].units[1] || unitCategories[cat].units[0]);
                  setResult(null);
                }}
              >
                <span className="tab-icon">{unitCategories[cat].icon}</span>
                {unitCategories[cat].name}
              </button>
            ))}
          </div>
        </div>

        <div className="calculator-container">
          <div className="converter-body">
            {/* Current Category Header */}
            <div className="calc-header">
              <h3>
                <span className="calc-icon">{unitCategories[category].icon}</span>
                {unitCategories[category].name}
              </h3>
              <p className="calc-info">
                Convert between {unitCategories[category].units.length} different units
              </p>
            </div>

            {/* Conversion Inputs */}
            <div className="conversion-inputs">
              <div className="input-group">
                <label htmlFor="fromValue">From Value:</label>
                <input
                  id="fromValue"
                  type="text"
                  placeholder="Enter value..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="value-input"
                  onKeyPress={(e) => e.key === 'Enter' && handleConvert()}
                />
              </div>

              <div className="unit-selectors">
                <div className="unit-select-group">
                  <label>From Unit:</label>
                  <select 
                    value={fromUnit} 
                    onChange={(e) => setFromUnit(e.target.value)}
                    className="unit-select"
                  >
                    {unitCategories[category].units.map((unit) => (
                      <option key={`from-${unit}`} value={unit}>{unit}</option>
                    ))}
                  </select>
                  <div className="unit-info">
                    <span className="info-icon">ℹ️</span>
                    <span className="info-text">{getUnitDescription(fromUnit)}</span>
                  </div>
                </div>

                <button className="swap-btn" onClick={handleSwap} title="Swap units">
                  ⇄
                </button>

                <div className="unit-select-group">
                  <label>To Unit:</label>
                  <select 
                    value={toUnit} 
                    onChange={(e) => setToUnit(e.target.value)}
                    className="unit-select"
                  >
                    {unitCategories[category].units.map((unit) => (
                      <option key={`to-${unit}`} value={unit}>{unit}</option>
                    ))}
                  </select>
                  <div className="unit-info">
                    <span className="info-icon">ℹ️</span>
                    <span className="info-text">{getUnitDescription(toUnit)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="calc-btn calc-btn-equals" onClick={handleConvert}>
                <span className="btn-icon">🔃</span>
                Convert
              </button>
              <button className="calc-btn calc-btn-clear" onClick={handleClear}>
                <span className="btn-icon">🗑️</span>
                Clear
              </button>
            </div>

            {/* Result Display */}
            {result && (
              <div className="result-display">
                <div className="calc-display">
                  <div className="calc-mode">
                    <span>Conversion Result</span>
                    <span>{category.toUpperCase()}</span>
                  </div>
                  <div className="calc-history">
                    {inputValue} {fromUnit} →
                  </div>
                  <div className="calc-screen">
                    {result.split('=')[1]?.trim() || result}
                  </div>
                </div>
                <button 
                  className="calc-btn calc-btn-operator"
                  onClick={() => copyToClipboard(result)}
                >
                  <span className="btn-icon">📋</span>
                  Copy Result
                </button>
              </div>
            )}

            {/* Quick Conversions */}
            <div className="calculator-tools">
              <h3>
                <span className="tools-icon">⚡</span>
                Quick Conversions
              </h3>
              <div className="tools-grid">
                <div className="tool-card">
                  <h4>0 dBm → mW</h4>
                  <button 
                    className="tool-btn"
                    onClick={() => {
                      setInputValue('0');
                      setFromUnit('dBm');
                      setToUnit('mW');
                      handleConvert();
                    }}
                  >
                    Convert
                  </button>
                </div>
                <div className="tool-card">
                  <h4>1 V → dBm</h4>
                  <button 
                    className="tool-btn"
                    onClick={() => {
                      setInputValue('1');
                      setFromUnit('V');
                      setToUnit('dBm');
                      handleConvert();
                    }}
                  >
                    Convert
                  </button>
                </div>
                <div className="tool-card">
                  <h4>100 MHz → Hz</h4>
                  <button 
                    className="tool-btn"
                    onClick={() => {
                      setInputValue('100');
                      setFromUnit('MHz');
                      setToUnit('Hz');
                      handleConvert();
                    }}
                  >
                    Convert
                  </button>
                </div>
                <div className="tool-card">
                  <h4>1 kΩ → Ω</h4>
                  <button 
                    className="tool-btn"
                    onClick={() => {
                      setInputValue('1');
                      setFromUnit('kΩ');
                      setToUnit('Ω');
                      handleConvert();
                    }}
                  >
                    Convert
                  </button>
                </div>
              </div>
            </div>

            {/* Conversion History */}
            {history.length > 0 && (
              <div className="calc-legend">
                <h3>
                  <span className="history-icon">📜</span>
                  Recent Conversions
                </h3>
                <div className="history-list">
                  {history.map((item, index) => (
                    <div key={index} className="history-item">
                      <div className="history-conversion">
                        <span className="history-from">{item.from}</span>
                        <span className="history-arrow">→</span>
                        <span className="history-to">{item.to}</span>
                      </div>
                      <div className="history-meta">
                        <span className="history-category">{item.category}</span>
                        <span className="history-time">{item.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button 
                  className="calc-btn calc-btn-clear"
                  onClick={handleClearHistory}
                  style={{ marginTop: '1rem' }}
                >
                  Clear History
                </button>
              </div>
            )}

            {/* Help Section */}
            <div className="calc-guide">
              <h4>
                <span className="help-icon">💡</span>
                How to use the Unit Converter
              </h4>
              <ul>
                <li>1. Select a category from the tabs above</li>
                <li>2. Enter the value you want to convert</li>
                <li>3. Select the "From" and "To" units</li>
                <li>4. Click "Convert" or press Enter</li>
                <li>5. Click ⇄ to swap units instantly</li>
                <li>6. Use quick conversions for common values</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer matching Calculator footer */}
        <div className="calculator-footer">
          <button 
            className="back-home-btn-footer"
            onClick={onClose}
          >
            ← Back to Home
          </button>
          <p className="footer-note">
            Unit Converter • All conversions calculated with engineering precision
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;