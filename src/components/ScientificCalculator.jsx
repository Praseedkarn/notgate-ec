import React, { useState } from 'react';

function ScientificCalculator() {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState(0);
  const [radians, setRadians] = useState(false);

  const scientificButtons = [
    ['sin', 'cos', 'tan', 'log'],
    ['ln', '√', 'x²', 'x³', '10^x'],
    ['π', 'e', '(', ')', '←'],
    ['M+', 'M-', 'MR', 'MC'],
    ['C', '±', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=', 'Rad/Deg']
  ];

  const handleButtonClick = (value) => {
    switch(value) {
      case 'C':
        setDisplay('0');
        break;
      case '←':
        setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
        break;
      case '=':
        try {
          const result = eval(display
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/π/g, Math.PI)
            .replace(/e/g, Math.E)
          );
          setDisplay(String(result));
        } catch {
          setDisplay('Error');
        }
        break;
      case 'sin':
      case 'cos':
      case 'tan':
        try {
          let angle = parseFloat(display);
          if (!radians) angle = angle * (Math.PI / 180);
          const result = Math[value](angle);
          setDisplay(String(result.toFixed(6)));
        } catch {
          setDisplay('Error');
        }
        break;
      case 'log':
        try {
          const result = Math.log10(parseFloat(display));
          setDisplay(String(result.toFixed(6)));
        } catch {
          setDisplay('Error');
        }
        break;
      case 'ln':
        try {
          const result = Math.log(parseFloat(display));
          setDisplay(String(result.toFixed(6)));
        } catch {
          setDisplay('Error');
        }
        break;
      case '√':
        try {
          const result = Math.sqrt(parseFloat(display));
          setDisplay(String(result));
        } catch {
          setDisplay('Error');
        }
        break;
      case 'x²':
        try {
          const result = Math.pow(parseFloat(display), 2);
          setDisplay(String(result));
        } catch {
          setDisplay('Error');
        }
        break;
      case 'x³':
        try {
          const result = Math.pow(parseFloat(display), 3);
          setDisplay(String(result));
        } catch {
          setDisplay('Error');
        }
        break;
      case '10^x':
        try {
          const result = Math.pow(10, parseFloat(display));
          setDisplay(String(result));
        } catch {
          setDisplay('Error');
        }
        break;
      case '±':
        setDisplay(String(-parseFloat(display)));
        break;
      case 'Rad/Deg':
        setRadians(!radians);
        break;
      case 'M+':
        setMemory(memory + parseFloat(display));
        break;
      case 'M-':
        setMemory(memory - parseFloat(display));
        break;
      case 'MR':
        setDisplay(String(memory));
        break;
      case 'MC':
        setMemory(0);
        break;
      default:
        if (display === '0' || display === 'Error') {
          setDisplay(value);
        } else {
          setDisplay(display + value);
        }
    }
  };

  return (
    <div className="scientific-calculator">
      <div className="calc-display">
        <div className="calc-mode">
          <span>{radians ? 'RAD' : 'DEG'}</span>
          <span>M: {memory.toFixed(2)}</span>
        </div>
        <div className="calc-screen">{display}</div>
      </div>
      
      <div className="calc-buttons">
        {scientificButtons.map((row, rowIndex) => (
          <div key={rowIndex} className="calc-row">
            {row.map((btn) => (
              <button
                key={btn}
                className={`calc-btn ${['C', '='].includes(btn) ? 'calc-btn-equals' : 
                  ['+', '-', '×', '÷'].includes(btn) ? 'calc-btn-operator' :
                  'calc-btn-number'}`}
                onClick={() => handleButtonClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
      
      <div className="calc-legend">
        <p><strong>Functions:</strong> sin, cos, tan (trigonometric) | log, ln (logarithmic)</p>
        <p><strong>Constants:</strong> π (3.14159), e (2.71828)</p>
        <p><strong>Memory:</strong> M+ (add), M- (subtract), MR (recall), MC (clear)</p>
      </div>
    </div>
  );
}

export default ScientificCalculator;