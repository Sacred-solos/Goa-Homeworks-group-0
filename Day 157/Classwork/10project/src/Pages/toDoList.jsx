import { useState } from "react";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput,setTaskInput] = useState('');
  
    const addTask=() =>{
      if(tasks) {
        setTasks([...tasks,{ text:taskInput, completed:false}]);
        setTaskInput('');
      }
    };
  
    const taskCompleteToggle =(index) =>{
      setTasks(tasks.map((task, i) => index==i ? {...task,completed:true}:task));
    };
    const deleteTask =(index) =>{
        setTasks(pre => pre.filter((_,i) =>i !==index))
    };

    return(
        
        <div>
            <h1>To do list</h1>
            <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} placeholder="Add task"/>
            <button onClick={addTask}>Add task</button>
            <div>
                {tasks.map((task,index) =>(
                    <div>
                        <p key={index} onClick={()=>taskCompleteToggle(index)} style={{textDecoration:task.completed ? 'line-through' : 'none'}}>
                        {task.text}
                        
                        </p>
                    <button onClick={()=>deleteTask(index)}>Delete</button>
                    </div>
                    

                ))}
            </div>

        </div>

    )
}

export default TodoList;
