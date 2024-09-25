import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function About() {
  const { backgroundColor, textColor } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
}

export default About;