import './assets/stylesheets/style.scss';
// import React, { useState, useEffect } from 'react'; 
import ProjectMembersContainer from './ProjectMembersContainer';
import TagsContainer from './TagsContainer';
import ProjectTypeContainer from './ProjectTypeContainer';

export default function ProjectSideBar(props){ 
    return (
        <div className='project-content-details'>
            <h3>Project Details</h3>
            <ProjectTypeContainer />
            <TagsContainer />
            <ProjectMembersContainer />
        </div>
    )
}