import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = e.target.taskName.value;
    if (newTask) setTasks([newTask, ...tasks]);
    e.target.reset();
  };
console.log("rerender")
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="taskName" placeholder="Input task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;