import React, { useState } from 'react';

function SimpleCalculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const simpleButtons = [
    ['C', '±', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const toggleSign = () => {
    setDisplay(String(-parseFloat(display)));
  };

  const inputPercent = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const currentValue = previousValue || 0;
      let newValue;
      
      switch(operator) {
        case '+': newValue = currentValue + inputValue; break;
        case '-': newValue = currentValue - inputValue; break;
        case '×': newValue = currentValue * inputValue; break;
        case '÷': newValue = currentValue / inputValue; break;
        case '%': newValue = currentValue % inputValue; break;
        default: return;
      }
      
      setPreviousValue(newValue);
      setDisplay(String(newValue));
    }
    
    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = () => {
    const inputValue = parseFloat(display);
    
    if (previousValue !== null && operator) {
      let result;
      switch(operator) {
        case '+': result = previousValue + inputValue; break;
        case '-': result = previousValue - inputValue; break;
        case '×': result = previousValue * inputValue; break;
        case '÷': result = previousValue / inputValue; break;
        case '%': result = previousValue % inputValue; break;
        default: return;
      }
      
      setDisplay(String(result));
      setPreviousValue(null);
      setOperator(null);
      setWaitingForOperand(false);
    }
  };

  const handleButtonClick = (value) => {
    if (/\d/.test(value)) {
      inputDigit(value);
    } else if (value === '.') {
      inputDecimal();
    } else if (value === 'C') {
      clearDisplay();
    } else if (value === '±') {
      toggleSign();
    } else if (value === '%') {
      inputPercent();
    } else if (value === '=') {
      calculate();
    } else {
      performOperation(value);
    }
  };

  return (
    <div className="simple-calculator">
      <div className="calc-display">
        <div className="calc-history">
          {previousValue} {operator}
        </div>
        <div className="calc-screen">{display}</div>
      </div>
      
      <div className="calc-buttons">
        {simpleButtons.map((row, rowIndex) => (
          <div key={rowIndex} className="calc-row">
            {row.map((btn) => (
              <button
                key={btn}
                className={`calc-btn ${
                  btn === '=' ? 'calc-btn-equals' :
                  ['+', '-', '×', '÷', '%'].includes(btn) ? 'calc-btn-operator' :
                  ['C', '±'].includes(btn) ? 'calc-btn-clear' :
                  'calc-btn-number'
                }`}
                onClick={() => handleButtonClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
      
      <div className="calc-guide">
        <h4>Quick Operations:</h4>
        <ul>
          <li><strong>C</strong> - Clear everything</li>
          <li><strong>±</strong> - Toggle positive/negative</li>
          <li><strong>%</strong> - Percentage calculation</li>
          <li><strong>.</strong> - Decimal point</li>
        </ul>
      </div>
    </div>
  );
}

export default SimpleCalculator;