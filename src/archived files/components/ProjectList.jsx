
import './assets/stylesheets/style.scss';
import React, { useState, useEffect } from 'react'; 
import addSymbol from './assets/images/add-symbol.svg'
import ProjectListItem from './ProjectListItem';

function ProjectList(props){
    return <div className="project-list-container">  
        <div className='container-header'>
            <h1>Project List</h1>
            <form method="POST" onSubmit={props.handleAddProject}> {/* add an onblur or onSubmit feature that removes the value on the form */}
                {/* try to make the addSymbol change into white when hovered over */}
                <img src={addSymbol} alt="plus symbol for adding" />
                <input name='project_name' id='project_name' type="text" placeholder="add new"/>
            </form>
        </div>
        <div className="project-list-content">
            {
               props.projectList === undefined ?  <></> : 
               props.projectList.map((project) => {
                   // console.log(project)
                   return <ProjectListItem key={project.projectID} projKey={project.projectID} openProject={props.openProject} projectTitle={project.projectTitle} activeProject={props.activeProject} />
               }).reverse()
            }
        </div>
    </div>;    
}; 

export default ProjectList; 
