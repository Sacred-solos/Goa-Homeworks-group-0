import React, { useState, useEffect } from 'react';

function App() {
  // 1. Counter
  /*
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  */

  // 2. Toggle Text
  /*
  const [text, setText] = useState("Hello");
  const handleToggle = () => {
    setText(text === "Hello" ? "Goodbye" : "Hello");
  };
  */

  // 3. Show/Hide Element
  /*
  const [isVisible, setIsVisible] = useState(true);
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  */

  // 4. Change Background Color
  /*
  const [color, setColor] = useState("lightblue");
  const handleChangeColor = () => {
    setColor(color === "lightblue" ? "lightcoral" : "lightblue");
  };
  */

  // 5. List of Items
  /*
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleAddItem = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };
  */

  // 6. Form Submission
  /*
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  */

  // 7. Like Button
  /*
  const [liked, setLiked] = useState(false);
  const handleToggleLike = () => {
    setLiked(!liked);
  };
  */

  // 8. Show Password
  /*
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  */

  // 9. Disable/Enable Button
  /*
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  */

  // 10. Image Carousel
  /*
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150/111111",
    "https://via.placeholder.com/150/222222"
  ];
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };
  const handlePrev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };
  */

  // 11. Character Counter
  /*
  const [text, setText] = useState("");
  */

  // 12. Timer
  /*
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);
  const handleStart = () => {
    setRunning(true);
  };
  */

  // 13. Todo List
  /*
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const handleAddTask = () => {
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };
  const handleToggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  */

  // 14. Dynamic Styling
  const [color, setColor] = useState("black");

  return (
    <div>
      {/* 1. Counter */}
      {/* <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button> */}

      {/* 2. Toggle Text */}
      {/* <p>{text}</p>
      <button onClick={handleToggle}>Toggle Text</button> */}

      {/* 3. Show/Hide Element */}
      {/* {isVisible && <p>This is a paragraph of text.</p>}
      <button onClick={handleToggleVisibility}>
        {isVisible ? "Hide" : "Show"} Text
      </button> */}

      {/* 4. Change Background Color */}
      {/* <div style={{ backgroundColor: color, padding: "20px" }}>
        <button onClick={handleChangeColor}>Change Background Color</button>
      </div> */}

      {/* 5. List of Items */}
      {/* <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}

      {/* 6. Form Submission */}
      {/* <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )} */}

      {/* 7. Like Button */}
      {/* <button onClick={handleToggleLike}>
        {liked ? "Unlike" : "Like"}
      </button> */}

      {/* 8. Show Password */}
      {/* <input 
        type={showPassword ? "text" : "password"} 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <label>
        <input 
          type="checkbox" 
          checked={showPassword} 
          onChange={handleTogglePassword} 
        />
        Show Password
      </label> */}

      {/* 9. Disable/Enable Button */}
      {/* <label>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheck} 
        />
        Enable Button
      </label>
      <button disabled={!isChecked}>Click Me</button> */}

      {/* 10. Image Carousel */}
      <img src={images[index]} alt="carousel" />
      <div>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;