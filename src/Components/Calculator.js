import React, { useState } from 'react';
// import Child from './ChildComponent';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  const displayValue = calculatorData.next || calculatorData.total || '0';

  return (
    <div id="calBody">
      <div className="container">
        <div className="display">{displayValue}</div>

        <div className="keypad">
          <button type="button" className="btn" onClick={() => handleClick('AC')}>AC</button>
          <button type="button" className="btn" onClick={() => handleClick('+/-')}>+/-</button>
          <button type="button" className="btn" onClick={() => handleClick('%')}>%</button>
          <button className="operatorBtn" type="button" onClick={() => handleClick('÷')}>&divide;</button>
          <button type="button" className="btn" onClick={() => handleClick('7')}>7</button>
          <button type="button" className="btn" onClick={() => handleClick('8')}>8</button>
          <button type="button" className="btn" onClick={() => handleClick('9')}>9</button>
          <button className="operatorBtn" type="button" onClick={() => handleClick('x')}>x</button>
          <button type="button" className="btn" onClick={() => handleClick('4')}>4</button>
          <button type="button" className="btn" onClick={() => handleClick('5')}>5</button>
          <button type="button" className="btn" onClick={() => handleClick('6')}>6</button>
          <button className="operatorBtn" type="button" onClick={() => handleClick('-')}>-</button>
          <button type="button" className="btn" onClick={() => handleClick('1')}>1</button>
          <button type="button" className="btn" onClick={() => handleClick('2')}>2</button>
          <button type="button" className="btn" onClick={() => handleClick('3')}>3</button>
          <button className="operatorBtn" type="button" onClick={() => handleClick('+')}>+</button>
          <button className="btn0" type="button" onClick={() => handleClick('0')}>0</button>
          <button type="button" className="btn" onClick={() => handleClick('.')}>.</button>
          <button className="operatorBtn" type="button" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
