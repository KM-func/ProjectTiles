import './assets/stylesheets/style.scss';
import React, { useState, useEffect } from 'react';
import AddIcon from './assets/images/add-symbol.svg'; 
import ProjectMember from './ProjectMember';

export default function ProjectMembersContainer(props){
    const linkHandler = e =>{
        e.preventDefault();
    }
 
    const [members, setMember] = useState([
        {name: "KM Funcion", role: "admin"},  
    ]);
    const addMember = (e) => {
        e.preventDefault()
        setMember([...members, {name: document.getElementById("add-member").value, role: "editor"}])
        document.getElementById("add-member").value = "";
    } 

    return(
        <div className='team-members-container'>
            <div className='header'>
                <p>Team Members</p> 
            </div>
            <form onSubmit={addMember}>
                <input type={"text"} id="add-member" name="add-member" placeholder='add member' />
            </form>
            <ul> 
                {members.map( (project, index) => {
                    return <ProjectMember key={index} memberName={project.name} memberRole={project.role}/>
                })}
            </ul>
        </div>
    )
}