import './App.css';
import { useState } from "react";
import Task from './Task';
import InputComponent from './InputComponent';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = event => {
    setInput(event.target.value);
  }

  const addTask = () => {
    let storedTasks = [...tasks];
    storedTasks.push({name: input, complete: false})
    setTasks(storedTasks);
  }

  const removeTask = index => {
    let storedTasks = [...tasks];
    storedTasks.splice(index, 1);
    setTasks(storedTasks);
  }

  const toggleComplete = index => {
    let storedTasks = [...tasks];
    storedTasks[index].complete = !storedTasks[index].complete;
    setTasks(storedTasks);
  }

  return (
    <>
      <h1>To Do</h1>
      <InputComponent 
        clickHandler={addTask} 
        inputHandler={inputHandler} 
      />
      {tasks.map((task, index) => {
        return <Task key={index} name={task.name} complete={task.complete} removeHandler={removeTask} checkHandler={toggleComplete} index={index} />
      })}
    </>
  )
}

export default App;
