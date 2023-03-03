const Task = (props) => {
    return (
        <li style={{ color: props.doned && "green" }} key={props.id}>{props.taskName} - <button onClick={() => props.deleteWork(props.id)}>X</button> - <button onClick={() => props.doneWork(props.id)}>Done</button></li>
    )
}

export default Task