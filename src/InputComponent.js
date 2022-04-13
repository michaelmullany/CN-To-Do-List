const InputComponent = ({ clickHandler }) => {
    return (
        <div>
            <label for="taskTitle">Task Name: </label>
            <input type="text" id="taskTitle" name="taskTitle"></input>
            <label for="taskDescription">Task Description: </label>
            <input type="text" id="taskDescription" name="taskDescription"></input>
            <button onClick={clickHandler}>Add Task</button>
        </div>
    )
}

export default InputComponent;