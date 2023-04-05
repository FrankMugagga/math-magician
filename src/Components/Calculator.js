// import React from 'react';
import Child from './ChildComponent';

function Calculator() {
  return (
    <div id="calBody">
      <div className="container">
        <div className="display">0</div>

        <Child />
      </div>
    </div>
  );
}

export default Calculator;
