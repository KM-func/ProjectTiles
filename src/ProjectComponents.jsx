import './assets/stylesheets/style.scss';
// import React, { useState, useEffect } from 'react';
import AddIcon from './assets/images/add-symbol.svg';
import Component from './Component'; 
export default function ProjectComponents(props){

    const linkHandler = e =>{
        e.preventDefault();
    } 

    return (
        <div className='project-component-container'>
            <div className='project-component-header'>
                    <h3>Project Components</h3>
                    <a href='/' onClick={linkHandler}>
                        <img src={AddIcon} alt="add icon" />
                        {/* replace the edit symbol with a white one on click at the end asa final touch */}
                    </a>
            </div>
            <div className='components-container'>
                {
                    props.project.components.map((component, index) => {
                        // console.log(project)
                        return <Component 
                            project={props.project}
                            addNewComponentTask={props.addNewComponentTask}
                            editComponentTask = {props.editComponentTask}
                            key={index} name={component.name} 
                            tasks={component.tasks}/>
                    })
                        // CHANGE key TO TASK ID
                }
                    
            </div>
        </div>
    )
}