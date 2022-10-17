import './assets/stylesheets/style.scss';
// import React, { useState, useEffect } from 'react';
import AddIcon from './assets/images/add-symbol.svg';
import Trash from './assets/images/delete-icon.svg';
import EditSymbol from './assets/images/edit-icon.svg';
import OverviewHeader from './OverviewHeader'
import ProjectDescription from './ProjectDescription';
import ProjectHistory from './ProjectHistory';
import ProjectComponents from './ProjectComponents';
import ProjectSideBar from './ProjectSideBar';
import { useState } from 'react';

export default function ProjectOverview(props){
    return(
        <div className='project-overview-container'>
            <OverviewHeader 
                editProjectDeadline={props.editProjectDeadline} 
                editProjectTitle={props.editProjectTitle} 
                activeProject={props.activeProject} 
                editProjectStatus = {props.editProjectStatus}
                />
            <div className='project-content'>
                <div className='project-content-main'>
                    <div className='project-info-container'>
                        <ProjectDescription
                            project={props.activeProject}
                            editProjectDescription={props.editProjectDescription}
                            />
                        <ProjectHistory />
                    </div>
                    <ProjectComponents 
                        project={props.activeProject}  
                        addNewComponentTask={props.addNewComponentTask} 
                        editComponentTask={props.editComponentTask}/>
                </div>
                <ProjectSideBar />
            </div>
        </div>
    )
}