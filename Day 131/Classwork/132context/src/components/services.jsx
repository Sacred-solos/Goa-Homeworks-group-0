import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Services() {
  const { backgroundColor, textColor } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <h1>Our Services</h1>
      <p>We provide various services.</p>
    </div>
  );
}

export default Services;