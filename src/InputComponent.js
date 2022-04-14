const InputComponent = ({ clickHandler, inputHandler: inputHandler }) => {

    return (
        <div id="taskInput">
            <label htmlFor="taskName">Task Name</label>
            <input onChange={inputHandler} type="text" id="taskName" name="taskName"></input>
            <button onClick={clickHandler}>Add Task</button>
        </div>
    )
}

export default InputComponent;