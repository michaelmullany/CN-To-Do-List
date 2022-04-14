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
    storedTasks.push(input)
    setTasks(storedTasks);
  }

  const removeTask = index => {
    let storedTasks = [...tasks];
    storedTasks.splice(index, 1);
    setTasks(storedTasks);
  }

  return (
    <>
      <h1>To Do</h1>
      <InputComponent 
        clickHandler={addTask} 
        inputHandler={inputHandler} 
      />
      {tasks.map((input, index) => {
        return <Task key={index} name={input} removeHandler={removeTask} index={index} />
      })}
    </>
  )
}

export default App;
