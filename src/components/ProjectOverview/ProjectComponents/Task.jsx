import { useState } from "react";
import TaskDetailsModal from "./TaskDetailsModal";

export default function Task(props){
    const [show, editShow] = useState(false);

    const changeEdit = (e) =>{
        e.preventDefault()
        if(show === false){
            editShow(true)
        } else{
            editShow(false)
        }
    }

    const dragStart = (e) =>{
        e.dataTransfer.setData("taskID", props.taskID)
        e.dataTransfer.setData("taskStatus", props.status)
        // document.getElementById(props.taskID).style.border = "solid blue 2px"
    }

    return(
        <>
        <TaskDetailsModal close={changeEdit} show={show} {...props} />
        <div className="task" id={props.taskID} draggable onDragStart={(e)=>{dragStart(e)}}>
            <a href="/" onClick={changeEdit}>{props.name}</a>
            <p>{props.assignedTo}</p>
            <p>
                {
                    props.deadline !== "Invalid Date" ? 
                        <>Deadline: {props.deadline}</>:
                        "( No deadline set! )"
                }
                
            </p>
        </div>
        </>
    )
}