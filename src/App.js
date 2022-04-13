import './App.css';
import { useState } from "react";
import Task from './Task';
import InputComponent from './InputComponent';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleInputHandler = event => {
    setTitle(event.target.value);
  }

  const descriptionInputHandler = event => {
    setDescription(event.target.value);
  }

  const addTask = () => {
    let storedTasks = [...tasks];
    storedTasks.push({
       name: title,
       description: description 
    })
    setTasks(storedTasks);
  }

  return (
    <>
      <h1>To Do</h1>
      <InputComponent 
        clickHandler={addTask} 
        titleInputHandler={titleInputHandler} 
        descriptionInputHandler={descriptionInputHandler}
      />
      {tasks.map((task, index) => {
        return <Task key={index} title={task.name} description={task.description} />
      })}
    </>
  )
}

export default App;
