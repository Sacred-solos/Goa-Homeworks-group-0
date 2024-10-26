import React, { useState, useMemo } from 'react';

function SortedArray() {
  const [sortOrder, setSortOrder] = useState('asc');
  const largeArray = useMemo(() => Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)), []);

  const sortedArray = useMemo(() => {
    return largeArray.sort((a, b) => (sortOrder === 'asc' ? a - b : b - a));
  }, [largeArray, sortOrder]);

  return (
    <div>
      <button onClick={() => setSortOrder('asc')}>Sort Ascending</button>
      <button onClick={() => setSortOrder('desc')}>Sort Descending</button>
      <ul>
        {sortedArray.slice(0, 100).map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default SortedArray;