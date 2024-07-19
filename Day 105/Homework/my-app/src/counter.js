import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Value: {count}</h2>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  );
}

export default Counter;