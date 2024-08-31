import React, { useState } from 'react';

function ColorChange() {
  const [color, setColor] = useState('');
  const [paragraphColor, setParagraphColor] = useState('black');

  const handleChange = (e) => {
    setColor(e.target.value);  
  };

  const handleClick = () => {
    setParagraphColor(color);  
  };

  return (
    <div>
      <input 
        type="text" 
        value={color} 
        onChange={handleChange}  
        placeholder="Enter a color" 
      />
      <button onClick={handleClick}>Change Color</button>
      <p style={{ color: paragraphColor }}>
        This paragraph will change color.
      </p>
    </div>
  );
}

export default ColorChange;