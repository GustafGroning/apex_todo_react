import "./Task.css";

function Task(props) {

    return (
        <div className="task-item"> 
        <h1 className="task-name"> Task Name </h1>
        <h2 className="task-priority"> Priority </h2>
        <h2 className="task-duration"> Duration </h2>

        </div>
    )
}

export default Task;