const InputComponent = ({ clickHandler, inputHandler, value }) => {

    return (
        <div id="taskInput">
            <label htmlFor="taskName">Enter a Task</label>
            <input onChange={inputHandler} type="text" id="taskName" name="taskName" value={value}></input>
            <button onClick={clickHandler}>Add Task</button>
        </div>
    )
}

export default InputComponent;