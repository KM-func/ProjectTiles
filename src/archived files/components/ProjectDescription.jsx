
import './assets/stylesheets/style.scss';
import React, { useState } from 'react';  
import EditSymbol from './assets/images/edit-icon.svg'
import ReadOnlyDescription from './ReadOnlyDescription';
import EditableDescription from './EditableDescription'

export default function ProjectDescription(props){
    const linkHandler = e =>{
        e.preventDefault();
        setDescription(true);
        console.log("editing description")
    } 
    const [editDescription, setDescription] = useState(false); 
    
    const completeEdit = () => {
        setDescription(false);
        props.editProjectDescription(props.project.projectID, document.getElementById("project-description").value)
        console.log("editing done!")
    }
    
    return(
    <div className='description info-container'>
        <div className='project-info-header'>
            <div className='header-title'>
                <h3>Project description</h3>
                <a href='/' onClick={linkHandler}>
                    <img src={EditSymbol} alt="edit symbol" />
                    {/* replace the edit symbol with a white one on click at the end as a final touch */}
                </a>    
            </div>
            
            <div className='project-info-content'  onBlur={completeEdit}>
                {
                    editDescription ? 
                    <EditableDescription onSubmit={completeEdit} description={props.project.description} 
                    editDescription={editDescription} setDescription={setDescription} /> :
                    <ReadOnlyDescription description={props.project.description} editDescription={editDescription} setDescription={setDescription}  />
                }
            </div>
        </div>
    </div>
    )
}
