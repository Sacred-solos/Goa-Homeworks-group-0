import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Contact() {
  const { backgroundColor, textColor } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <h1>Contact Us</h1>
      <p>Get in touch with us!</p>
    </div>
  );
}

export default Contact;