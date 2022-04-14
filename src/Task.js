const Task = props => {
    return (
        <div className="task">
            <div className="taskLeft">
                {props.complete ? 
                    <h2 className="complete">{props.name}</h2>
                    :
                    <h2>{props.name}</h2>
                }
            </div>
            <div className="taskRight">
                <input type="checkbox" onClick={() => props.checkHandler(props.index)}></input>
                <button class="button removeButton" onClick={() => {props.removeHandler(props.index)}}>X</button>
            </div>
        </div>
    )
}

export default Task;