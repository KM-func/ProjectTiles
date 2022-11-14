import './assets/stylesheets/style.scss';
import React, { useState } from 'react';
import AddIcon from './assets/images/add-symbol.svg';
import ComponentTask from './ComponentTask';
import ModalContainer from './ModalContainer'; 
import AddNewTaskModal from './AddNewTaskModal';

export default function Component(props){
    const [openedTask, setOpenedTask] = useState("") 
    const [openedTaskInfo, setOpenedTaskInfo] = useState("")
    // USE THE TASKID FOR THE TOP
    const [addTask, setNewTask] = useState(false)

    const handleOpenTask = (elem) => { 
        setOpenedTask(`${elem}`)
    }
    const handleOpenedTaskDetails = (task) =>{
        handleOpenTask();
        setOpenedTaskInfo(task)
        console.log(openedTaskInfo)
    }

    const handleAddTask = (e) => {
        e.preventDefault()
        setNewTask(true)
    }

    const handleClose = (e) => {
        e.preventDefault();
        setOpenedTask("")
    } 
    
    const handleCloseNewTask = (e) =>{
        e.preventDefault();
        setNewTask(false);
    }
    const handleSavedState = e =>{
        e.preventDefault();

        const idGenerator = length => {
            let result = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * 
                charactersLength));
           }
           return result;
        }
        
        let projectID = props.project.projectID;
        let componentName = "Backlog"
        let task = {
            taskID: idGenerator(11),
            taskName: document.getElementById("task-name").value,
            assignedTo: document.getElementById("task-assigned-to").value,
            deadline: document.getElementById("task-deadline").value,
            taskStatus: document.getElementById("task-status").value,
            // taskStatus: "Backlog",
            taskDescription: document.getElementById("task-description").value,
        }
        
        props.addNewComponentTask(projectID, componentName, task);
        console.log("added task", task) 
        setNewTask(false);
    } 

    const handleSaveEdit = (e) => {
        e.preventDefault();

        let projectID = props.project.projectID;
        let componentName = "Backlog"  
        let task = { 
            taskName: document.getElementById("task-name").value,
            assignedTo: document.getElementById("task-assigned-to").value,
            deadline: document.getElementById("task-deadline").value,
            taskStatus: document.getElementById("task-status").value,
            // taskStatus: "Backlog",
            taskDescription: document.getElementById("task-description").value,
        }
        props.editComponentTask(projectID, componentName, task);
        console.log("edited", task)
        
    }

    return (
        <div className='component'>
            {
                openedTask ?
                <ModalContainer  
                    handleSaveEdit={handleSaveEdit}
                    handleClose={handleClose} 
                    task = {
                        openedTaskInfo
                    }
                    /> :
                <></>
            }
            <div className='component-header'>
                {
                    addTask ? 
                    <AddNewTaskModal handleClose={handleCloseNewTask} handleSavedState={handleSavedState} /> :
                    <></>
                }
                
                <h3>{props.name}</h3>
                <a href='/' onClick={handleAddTask}>
                    <img src={AddIcon} alt="add icon"/>
                </a>
            </div>
            <div className='component-task-container'>
                {
                    props.tasks.map((task, index) => {
                        console.log("added task")
                        return <ComponentTask id={task.taskID} task={task} handleOpenedTaskDetails={handleOpenedTaskDetails} handleOpenTask={handleOpenTask} key={index} name={task.taskName} deadline={task.deadline} assignedTo={task.assignedTo} />
                    }).reverse()
                }
            </div>
        </div>
    )
}