const InputComponent = ({ clickHandler, titleInputHandler }) => {

    return (
        <div id="taskInput">
            <label htmlFor="taskTitle">Task Name</label>
            <input onChange={titleInputHandler} type="text" id="taskTitle" name="taskTitle"></input>
            <button onClick={() => {clickHandler("task1")}}>Add Task</button>
        </div>
    )
}

export default InputComponent;