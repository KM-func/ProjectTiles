import './assets/stylesheets/style.scss';
import React, { useState, useEffect } from 'react'; 
import CloseIcon from './assets/images/close-icon.svg'
import EditIcon from './assets/images/edit-icon.svg'

export default function ReadOnlyTaskModal(props){ 
    return (
        <div className="modal container" > 
            <a href='/' onClick={props.handleClose} className="close-button">
                <img src={CloseIcon} alt="close icon"/>
            </a>
            <div className='header'>
                <div>
                    <h1>{props.task.taskName}</h1>
                    <h2>Assigned to: KM Funcion</h2>
                </div>
                {/* <a href='/' onClick={props.handleEditState}>
                    <img src={EditIcon} alt="Edit Icon" />Edit 
                </a> */}
            </div>

            <form> 
                <p>
                    Deadline: <span> {props.task.deadline} </span>
                </p>
                <select id='' className='task-status'>
                    <option className='not-started' value={"not_started"}>not started</option>
                    <option className='active' value={"active"}>active</option>
                    <option className='postponed' value={"postponed"}>postponed</option>
                    <option className='cancelled' value={"cancelled"}>cancelled</option>
                </select>
            </form>

            <div>
                DESCRIPTION:
                <p>
                {props.task.taskDescription}
                </p>
            </div>
        </div>
    )
}