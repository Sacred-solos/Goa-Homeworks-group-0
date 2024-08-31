import React, { useState, useEffect } from "react";

//#1
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
      <h3>Themes</h3>
      <button onClick={toggleTheme}>
      {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

//#2
const CharacterLimitWarning = () => {
  const [text, setText] = useState("");
  const limit = 100;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h3>Character Limit Test</h3>
      <textarea value={text} onChange={handleTextChange} maxLength={limit} />
      <p>{text.length}/{limit} characters</p>
      {text.length >= 80 && text.length < limit && <p style={{ color: "red" }}>You are approaching the character limit!</p>}
    </div>
  );
};

//#3
const ColorPicker = () => {
  const [color, setColor] = useState("#000000");

  return (
    <div>
      <h3>Color Picker</h3>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <div style={{ backgroundColor: color, width: "100px", height: "100px", marginTop: "10px" }} />
    </div>
  );
};

//#4
const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);
  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div>
      <h3>Timer</h3>
      <p>{time} seconds</p>
      <button onClick={handleStart} disabled={running}>
        Start
      </button>
      <button onClick={handleStop} disabled={!running}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

//#5
const TextExpander = () => {
  const [expanded, setExpanded] = useState(false);
  const text = "niiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiika";

  return (
    <div>
      <h3>Text Expander</h3>
      <p>{expanded ? text : `${text.substring(0, 50)}...`}</p>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <h1>React Hooks Demo</h1>
      <ThemeSwitcher />
      <CharacterLimitWarning />
      <ColorPicker />
      <Timer />
      <TextExpander />
    </div>
  );
};

export default App;