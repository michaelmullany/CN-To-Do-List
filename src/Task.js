const Task = props => {
    return (
        <div className="task">
            <div className="taskLeft">
                {props.complete ? 
                    <h2 onClick={() => props.checkHandler(props.index)} className="complete">{props.name}</h2>
                    :
                    <h2 onClick={() => props.checkHandler(props.index)}>{props.name}</h2>
                }
            </div>
            <div className="taskRight">
                <button className="button removeButton" onClick={() => {props.removeHandler(props.index)}}>X</button>
            </div>
        </div>
    )
}

export default Task;