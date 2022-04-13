const InputComponent = ({ clickHandler, titleInputHandler, descriptionInputHandler }) => {

    return (
        <div>
            <label for="taskTitle">Task Name: </label>
            <input onChange={titleInputHandler} type="text" id="taskTitle" name="taskTitle"></input>
            <label for="taskDescription">Task Description: </label>
            <input onChange={descriptionInputHandler} type="text" id="taskDescription" name="taskDescription"></input>
            <button onClick={() => {clickHandler("task1","taskDescription2")}}>Add Task</button>
        </div>
    )
}

export default InputComponent;