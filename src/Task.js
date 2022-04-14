const Task = props => {
    return (
        <div className="task">
            <div className="taskLeft">
                <h2>{props.title}</h2>
            </div>
            <div className="taskRight">
                <input type="checkbox"></input>
                <button onClick={() => {props.removeHandler(props.index)}}>X</button>
            </div>
        </div>
    )
}

export default Task;