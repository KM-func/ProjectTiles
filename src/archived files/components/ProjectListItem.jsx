
import './assets/stylesheets/style.scss';
import React, { useState, useEffect } from 'react';  

function ProjectListItem(props){
    return <div className='project-list-item' id={props.projKey} onClick={e => {
        e.preventDefault();
        props.openProject(props.projKey);
        console.log("active Project: ", props.activeProject.projectID, props.activeProject.projectTitle)
    }}>             
            <a href='/'>
                <h3>{props.projectTitle}</h3> 
            </a>
    </div>;    
}; 

export default ProjectListItem; 
