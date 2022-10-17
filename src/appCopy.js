import './assets/stylesheets/style.scss';
import React, { useState, useEffect, useReducer } from 'react';   
import ProjectList from './ProjectList';
import ProjectOverview from './ProjectOverview';
import { act } from 'react-dom/test-utils';

const reducerUserProjects = (state, action) => { // state = data, action = function.
    switch (action.type) {
        // case "handleProjectTitleChange":
        //     return ((e) => { 
        //         return {...state, tempProjTitle: e.target.value }
        //     })() // almost forgot about immediate functions. good thing Sir Paul reminded me\ 
        case "addProject":
            return {...state, projectList: [...state.projectList, {
                projectID: action.projectID, 
                projectTitle: action.projectTitle,
            }],
            activeProject: {
                ...state,
                projectTitle: action.projectTitle,
                projectID: action.projectID
            }} //...state == copies all prior values EXCEPT the following changes in the subsequent code lines
        
        // add a function where editing activeProject's title also changes the projectTitle of the referenced project. like:
        case "editProjectTitle":
            return{...state, projectList: state.projectList.map((element) => {
                if(element.projectID === action.activeProject.projectID){
                    return {...state, projectTitle: action.activeProject.projectTitle}
                }
            })}
        default:
            return state   
    }
};

const reducerActiveProject = (state, action) => {
    switch (action.type) {
    case "openProject":
            return{...state, activeProject: {
                projectTitle: action.projectTitle,
                projectID: action.projectID,
            }}
    default:
    return state   
}
};

const userProjectsInitialState = {
        projectList: [], // this will contain a BUNCH of objects like the one below
        projectTitle: "",
    }

const activeProjectInitialState = {
    activeProject: {
        projectID: "",
        projectTitle: "",
        projectStatus: "",
        projectCreatedAt: "Dec 31, 2021",
        projectDeadline: "Jan 1, 2022",
        type: "",
        description: "",
        history: [
            {
                date: "Jan 1, 2022",
                entry: ""
            }
        ],
        tags: [],
        members: [
            {
                memberName: "",
                authorization: "",
            }
        ],
        components: [
            {
                componentName: "",
                tasks: [
                    {
                        taskName: "",
                        assignedTo: "",
                        deadline: "Jan 1, 2022",
                        taskStatus: "",
                        taskDescription: "",
                    }
                ]
            }
        ]
    },
}

function App(props){ 

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

    const [{projectList, projectTitle}, dispatchProjList] = useReducer(reducerUserProjects, userProjectsInitialState) 
    const [{activeProject}, dispatchActiveProj] = useReducer(reducerUserProjects, userProjectsInitialState) 
    
    const _handleAddProject = (e) => {
        e.preventDefault();
        let projectTitle = document.getElementById("project_name").value;
        let projectID = idGenerator(10);
        dispatchProjList({
            type: "addProject", projectTitle, projectID
        })
        document.getElementById('project_name').value("")
        // console.log(projectList)
    }
 
    const _openProject = (projectTitle, projectID) => { 
        dispatchProjList({
            type: "openProject", projectTitle, projectID
        })
        // console.log("active project: ", openedProject)
    }

    return (
        <div className="app">  
            <header className="app-header">  
                <h1 className='logo'>ProjecTiles</h1>
            </header>
            <div className='app-body'>
                <ProjectList 
                    handleAddProject={_handleAddProject}  
                    openProject={_openProject} 
                    projectList={projectList}
                    activeProject={ activeProject}/>
                <ProjectOverview activeProject={activeProject}/>
            </div> 
        </div>
    );     
}; 

export default App; 
