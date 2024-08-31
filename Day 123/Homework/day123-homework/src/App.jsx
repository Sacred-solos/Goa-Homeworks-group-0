import React, { useState, useEffect } from 'react';

const CombinedExercises = () => {
  const [count, setCount] = useState(0);

  const [title, setTitle] = useState('Default Title');
  useEffect(() => {
    document.title = title;
  }, [title]);


  const [visible, setVisible] = useState(true);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => console.log('Fetched Data:', data));
  }, []);


  const [autoCount, setAutoCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval); 
  }, []);

  const [text, setText] = useState('');
  useEffect(() => {
    console.log(`Input changed to: ${text}`);
  }, [text]);


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); 
  }, []);


  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    if (clickCount === 5) {
      alert('Button clicked 5 times!');
    }
  }, [clickCount]);

  return (
    <div>
      <h2>Simple Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h2>Change Document Title</h2>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Change Document Title" 
      />

      <h2>Toggle Paragraph Visibility</h2>
      <button onClick={() => setVisible(!visible)}>Toggle Paragraph</button>
      {visible && <p>This paragraph is visible!</p>}

      <h2>Data Fetch on Mount</h2>
      <p>Check the console for fetched data!</p>

      <h2>Auto-Increment Counter</h2>
      <p>Auto Count: {autoCount}</p>

      <h2>Input Tracker</h2>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something" 
      />
      <p>Current Input: {text}</p>

      <h2>Window Resize Event</h2>
      <p>Current Window Width: {windowWidth}px</p>

      <h2>Button Click Alert</h2>
      <button onClick={() => setClickCount(clickCount + 1)}>Click Me</button>
      <p>Button clicked {clickCount} times</p>
    </div>
  );
};

export default CombinedExercises;