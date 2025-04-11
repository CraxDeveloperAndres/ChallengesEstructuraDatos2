import React, { useState } from 'react';

const CounterApp = ({ defaultValue = 0 }) => {
  const [counter, setCounter] = useState(defaultValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(defaultValue);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Counter: {counter}</h1>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterApp;
