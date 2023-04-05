// import React from 'react';

function Child() {
  return (
    <div className="keypad">
      <button type="button" className="btn">AC</button>
      <button type="button" className="btn">+/-</button>
      <button type="button" className="btn">%</button>
      <button type="button" className="operatorBtn">÷</button>

      <button type="button" className="btn">7</button>
      <button type="button" className="btn">8</button>
      <button type="button" className="btn">9</button>
      <button type="button" className="operatorBtn">x</button>

      <button type="button" className="btn">4</button>
      <button type="button" className="btn">5</button>
      <button type="button" className="btn">6</button>
      <button type="button" className="operatorBtn">-</button>

      <button type="button" className="btn">1</button>
      <button type="button" className="btn">2</button>
      <button type="button" className="btn">3</button>
      <button type="button" className="operatorBtn">+</button>

      <button type="button" className="btn0">0</button>
      <button type="button" className="btn">.</button>
      <button type="button" className="operatorBtn">=</button>
    </div>
  );
}

export default Child;
