import './App.css';
import { useState } from "react";
import Task from './Task';
import InputComponent from './InputComponent';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const titleInputHandler = event => {
    setTitle(event.target.value);
  }

  const addTask = () => {
    let storedTasks = [...tasks];
    storedTasks.push(title)
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
        titleInputHandler={titleInputHandler} 
      />
      {tasks.map((title, index) => {
        return <Task key={index} title={title} removeHandler={removeTask} index={index} />
      })}
    </>
  )
}

export default App;
