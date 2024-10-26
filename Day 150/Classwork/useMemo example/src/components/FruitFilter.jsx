import React, { useState, useMemo } from 'react';

function FruitFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const fruits = ['Apple', 'Banana', 'Orange', 'Tomato', 'Grape'];

  const filteredFruits = useMemo(() => {
    return fruits.filter(fruit =>
      fruit.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, fruits]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitFilter;