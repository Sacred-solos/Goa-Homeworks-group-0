import React, { useState, useMemo, useCallback } from 'react';

const NumberFilter = () => {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [filter, setFilter] = useState(5);

  const filteredNumbers = useMemo(() => {
    console.log('Filtering numbers...');
    return numbers.filter(number => number > filter);
  }, [numbers, filter]);

  const updateFilter = useCallback((e) => {
    setFilter(Number(e.target.value));
  }, []);

  return (
    <div>
      <h2>Filter Numbers More Then:</h2>
      <input 
        type="number" 
        value={filter} 
        onChange={updateFilter} 
        placeholder="Enter number"
      />
      <ul>
        {filteredNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberFilter;