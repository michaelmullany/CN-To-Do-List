const Task = props => {
    return (
        <div className="task">
            <div className="taskLeft">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className="taskRight">
                <input type="checkbox"></input>
                <button>X</button>
            </div>
        </div>
    )
}

export default Task;