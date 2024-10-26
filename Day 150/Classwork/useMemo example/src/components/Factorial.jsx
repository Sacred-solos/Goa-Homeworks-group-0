import React, { useState, useMemo } from 'react';

function Factorial() {
  const [number, setNumber] = useState(1);

  const calculateFactorial = (n) => {
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
  };

  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Factorial: {factorial}</p>
    </div>
  );
}

export default Factorial;