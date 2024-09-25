import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Home() {
  const { backgroundColor, textColor } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <h1>Home Page</h1>
      <p>Welcome to Home page!</p>
    </div>
  );
}

export default Home;