import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Products() {
  const { backgroundColor, textColor } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <h1>Our Products</h1>
      <p>Check out products.</p>
    </div>
  );
}

export default Products;