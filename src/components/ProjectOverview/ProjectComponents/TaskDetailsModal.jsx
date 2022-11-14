import { useState } from "react";
import TaskStatusContainer from "./TaskStatusContainer";
import useProjects from "../../../ProjectsContext";
import TeamMember from "./TeamMembers";
import closeIcon from "../../../assets/images/close-icon.svg"

export default function TaskDetailsModal(props){
    const [edit, changeEdit] = useState(false);
    const { currentProject, editComponentTask, deleteTask } = useProjects();
    
    const formattedDate = new Date().toISOString().split("T")[0];
    let formattedTaskDeadlineDate;
    if(props.deadline !== "Invalid Date"){
        let deadlinePlusOne = new Date(props.deadline)

        let days = 1
        deadlinePlusOne.setDate(deadlinePlusOne.getDate() + days);
        formattedTaskDeadlineDate = new Date(deadlinePlusOne).toISOString().split("T")[0];
    }

    const setEdit = (e) =>{
        e.preventDefault();
        if(edit === false){
            changeEdit(true)
        } else {
            changeEdit(false)
        } 
    }

    const changeTask = (e) =>{
        e.preventDefault()
        let format = {year: 'numeric', month: 'short', day: 'numeric'};
        let deadlineRaw = document.getElementById("task-deadline").value;
        let formattedDate = new Date(deadlineRaw).toLocaleDateString('en-ph', format);

        let oldStatus = props.status;
        let editedTask = {
            taskID: props.taskID,
            name: document.getElementById("task-name").innerHTML,
            assignedTo: document.getElementById("task-assigned-to").value,
            deadline: formattedDate,
            status: document.getElementById("task-status").value,
            description:  document.getElementById("task-description").innerHTML,
        }
        editComponentTask(currentProject.projectID, editedTask, oldStatus, props.name)
        console.log("changed task")
    }

    const _deleteTask = (e) =>{
        e.preventDefault();

        if(e.target.classList.contains("content")){
            e.stopPropagation()
        } else {
            deleteTask(currentProject.projectID, props.taskID, props.name, props.status)
        }
        
    }


    if(props.show && !edit){
        return(
            <div className="modal">
                <div className="content task-details">
                    <a href="/" className="close" onClick={props.close}> 
                        <img src={closeIcon} alt="add-icon"/> 
                    </a>
                    <h1>{props.name}</h1>
                    <h3>Assigned to: <span>{props.assignedTo}</span></h3>
                    {
                        props.deadline !== "Invalid Date" ? 
                            <h3>Deadline: <span>{props.deadline}</span> </h3>:
                            <h3>( No deadline set! )</h3>
                    }
                    <h3>Status: <span>{props.status}</span></h3>
                    <h3>Description:</h3>
                    <p>
                        {props.description}
                    </p>
                    <div className="btn-container">
                        <a href="/" className="edit" onClick={setEdit}>edit</a>
                        <a href="/" className="delete" onClick={_deleteTask}>delete</a>
                    </div>
                   
                </div>
            </div>
        )
    } else if (props.show && edit){
        return(
            <div className="modal">
                <div className="content task-details">
                    <a href="/" className="close" onClick={(e) => {props.close(e); setEdit(e)}}>
                        <img src={closeIcon} alt="add-icon"/> 
                    </a>
                    <form  onSubmit={(e) => {setEdit(e); changeTask(e)}}>
                        <h1 id="task-name" contentEditable="true" className="editable">
                            {props.name}
                        </h1>
                        <label>Assigned To:</label>
                        <select id="task-assigned-to">
                            {currentProject.teamMembers.map((member, index)=>{
                                return(
                                    <TeamMember key={index} {...member} />
                                )
                            })}
                        </select>

                        <label>Deadline</label>
                        <input id="task-deadline" min={formattedDate} type={"date"} defaultValue={formattedTaskDeadlineDate}/>
                        
                        <label>Status</label> 
                        <TaskStatusContainer {...props}  />

                        <label>Description</label>
                        <p id="task-description" className="editable" contentEditable="true">
                            {props.description}
                        </p>
                        
                        <input type={"submit"} onClick={(e) => {setEdit(e); changeTask(e)}} value="save" />
                    </form> 
                    
                </div>
            </div>
        )
    }
}