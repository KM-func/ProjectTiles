
import './assets/stylesheets/style.scss';
// import React, { useState, useEffect } from 'react'; 
import Trash from './assets/images/delete-icon.svg' 
import ReadOnlyProjectDeadline from './ReadOnlyProjectDeadLine';
import EditableProjectDeadline from './EditableProjectDeadline';
import { useState } from 'react';
import ReadOnlyTitle from './ReadOnlyTitle';
import EditableTitle from './EditableTitle';
import ProjectStatusContainer from './ProjectStatusContainer';

export default function OverviewHeader(props){
    // const linkHandler = e =>{
        
    // }  
    const [editDeadline, setDeadline] = useState(false)
    const [editTitle, setTitle] = useState(false)

    const deleteProject = e => {
        e.preventDefault();
        console.log("ProjectDeleted")
    }
    const changeTitle = e =>{
        e.preventDefault(); 
        props.editProjectTitle(props.activeProject.projectID, document.getElementById("project-title").value)
        setTitle(false);
    } 

    const changeDeadline = (e) => {
        e.preventDefault()
        
        props.editProjectDeadline(props.activeProject.projectID, document.getElementById("project-deadline").value)
        console.log("editing done!")

        setDeadline(false);
    }

    const editProjectStatus = e => {
        e.preventDefault();

        props.editProjectStatus(
            props.activeProject.projectID, 
            document.getElementById("project-status").value
            )

        // console.log("STATUS FORM VAL: ", document.getElementById("project-status").value)
    }

    return(<div className='container-header'>
                {/* {props.activeProjectactiveProject === true ? <h1>{props.activeProjectprojectTitle}</h1>  : <></>} */}
                <div className='title-div'> 
                    {
                        editTitle ?
                        <EditableTitle 
                            changeTitle={changeTitle} 
                            title={props.activeProject.projectTitle} 
                            editTitle={editTitle} 
                            setTitle={setTitle} 
                            
                            />:
                        <ReadOnlyTitle title={props.activeProject.projectTitle} editTitle={editTitle} setTitle={setTitle} />
                    }

                    {
                        editDeadline ? <EditableProjectDeadline
                            editDeadline={editDeadline}  
                            changeDeadline= {changeDeadline}
                            /> :
                        <ReadOnlyProjectDeadline targetDeadline={props.activeProject.projectDeadline} editDeadline={editDeadline} setDeadline={setDeadline}/>
                    }
                </div>
                <div className='created-div'>
                    {
                        props.activeProject.projectCreatedAt ? 
                            <h3>Created at: {props.activeProject.projectCreatedAt}</h3> : 
                            <h3>No Project Selected!</h3>
                    }
                    <ProjectStatusContainer editProjectStatus={editProjectStatus} status={props.activeProject.projectStatus}/>
                </div>
                <div className='delete-button'>
                    <a href='/' onClick={deleteProject}>
                        <img src={Trash} alt=""/>
                    </a>
                </div>
               
            </div>
    )
}