import './App.css';
import { useState } from "react";
import Task from './Task';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    let storedTasks = [...tasks];
    storedTasks.push({
       name: "Washing",
       description: "Wash the dishes after dinner"
    })
    setTasks(storedTasks);
  }

  return (
    <>
      <h1>To Do</h1>
      <button onClick={addTask}>Add Task</button>
      {tasks.map((task, index) => {
        return <Task key={index} title={task.name} description={task.description} />
      })}
    </>
  )
}



export default App;
