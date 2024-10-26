import React from 'react';
import Factorial from './components/Factorial';
import FruitFilter from './components/FruitFilter';
import SortedArray from './components/SortedArray';
import NumberFilter from './components/NumberFilter';

function App() {
  return (
    <div>
      <h1>Memoization Examples</h1>
      <NumberFilter />
      <Factorial />
      <FruitFilter />
      <SortedArray />
    </div>
  );
}

export default App;