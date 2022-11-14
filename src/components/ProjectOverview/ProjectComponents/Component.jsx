import { useState } from 'react';
import AddTaskModal from './AddTaskModal';
import useProjects from "../../../ProjectsContext";
import Task from './Task';
import addIcon from "../../../assets/images/add-icon.svg"
import deleteIcon from "../../../assets/images/delete-icon.svg"

export default function Component(props){
    const [addTask, setAddTask] = useState(false);
    const { currentProject, editComponentTask, deleteComponent } = useProjects();

    const changeAddTask = (e) =>{
        e.preventDefault();
        if(addTask === false){
            setAddTask(true);
        } else{
            setAddTask(false);
        }
    }

    const draggingOver = (e) =>{
        e.preventDefault()
        console.log("dragging over")
    }

    const dragDropped = (e) =>{
        const transferredTask = e.dataTransfer.getData("taskID")
        // document.getElementById(transferredTask).style.border = "1px solid red"
        console.log("dragging dropped: ", transferredTask)
        const taskStatus = e.dataTransfer.getData("taskStatus")

        let taskData;
        for(let i=0; i < currentProject.components.length; i++){
            if(currentProject.components[i].name === taskStatus){
                console.log("FOUND COMPONENT")
                for(let j=0; j < currentProject.components[i].tasks.length; j++){
                    if(currentProject.components[i].tasks[j].taskID === transferredTask){
                        console.log("FOUND TASK")
                        taskData = currentProject.components[i].tasks[j];
                    }
                }
            }
        }

        const newTaskData = {
            ...taskData,
            status: props.name
        }

        console.log(taskData)
        editComponentTask(currentProject.projectID, newTaskData, taskStatus, taskData.name); 
    }

    const _deleteComponent = (e) =>{
        e.preventDefault();
        deleteComponent(currentProject.projectID, props.name)
    }

    return(
        <div className="component">
            <div className='header'>
                <h3>
                    {props.name} <a href="/" onClick={changeAddTask}>
                        <img src={addIcon} alt="edit icon"/>
                    </a>
                </h3>
                <a href='/' className='remove' onClick={_deleteComponent}><img src={deleteIcon} alt="delete icon"/></a>
            </div>

            <AddTaskModal add={addTask} name={props.name} close={changeAddTask} />
            <div className="task-container" id={props.name} onDragOver={draggingOver} onDrop={dragDropped}>
                {
                    props.tasks.length !== 0 ? 
                        props.tasks.map((task, index) =>{
                            return (
                                <Task keys={index} {...task} />
                            )
                        }).reverse() : <p>No Tasks set!</p>
                }
            </div>
        </div>
    )
}