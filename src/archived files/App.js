
import './assets/stylesheets/style.scss';
import React, { useState, useEffect, useReducer } from 'react';   
import ProjectList from './ProjectList';
import ProjectOverview from './ProjectOverview'; 

const reducer = (state, action) => { // state = data, action = function.
    switch (action.type) {
        // case "handleProjectTitleChange":
        //     return ((e) => { 
        //         return {...state, tempProjTitle: e.target.value }
        //     })() // almost forgot about immediate functions. good thing Sir Paul reminded me\ 
        case "addProject":
            return {...state, projectList: [...state.projectList, {
                ...state.projectTemplate,
                projectID: action.projectID, 
                projectTitle: action.projectTitle,
                projectCreatedAt: action.projectCreatedAt,
                
            }],
            activeProject: {
                ...state.activeProject,
                projectTitle: action.projectTitle,
                projectID: action.projectID,
                projectCreatedAt: action.projectCreatedAt
            }} //...state == copies all prior values EXCEPT the following changes in the subsequent code lines

        case "openProject": 
            return{...state,  
                activeProject : action.openedProj 
            }
        // add a function where editing activeProject's title also changes the projectTitle of the referenced project. like:

        case "editProjectTitle":
            return{...state, 
                projectList : state.projectList.map(
                    (project, index) => project.projectID === action.projectID ?
                        {...state.projectList[index], projectTitle: action.projectTitle} : project
                ), 

                activeProject: { 
                    ...state.activeProject,
                    projectTitle: action.projectTitle
                }
            }

        case "setProjectDeadline":
            return{...state,
                projectList : state.projectList.map(
                    (project, index) => project.projectID === action.projectID ?
                        {...state.projectList[index], projectDeadline: action.projectDeadline} : project
                ), 
                activeProject: { 
                    ...state.activeProject,
                    projectDeadline: action.projectDeadline
                }
            }

        case "editProjectStatus":
            return{...state,
                projectList : state.projectList.map(
                    (project, index) => project.projectID === action.projectID ?
                        {...state.projectList[index], projectStatus: action.projectStatus} : project
                ), 
                activeProject: { 
                    ...state.activeProject,
                    projectStatus: action.projectStatus
                } 
            }
        case "addNewComponent":
            return state

        case "editComponentTask":
            return {...state,
                projectList: state.projectList.map(
                    (project, index) => project.projectID === action.projectID ?
                        {...state.projectList[index], 

                            components: state.projectList[index].components.map(
                                (component, index2) => component.name === action.componentName ?
                                        {...state.projectList[index].components[index2],

                                            tasks: state.projectList[index].components.tasks.map(
                                                (task, index3) => task.taskID === action.taskID ?
                                                {
                                                    ...state.projectList[index].components[index2].tasks[index3],
                                                    taskName: action.task.taskName,
                                                    assignedTo: action.task.assignedTo,
                                                    deadline: action.task.deadline,
                                                    taskStatus: action.task.taskStatus,
                                                    taskDescription: action.task.taskDescription,
                                                } : task )
                                        }: component
                            )
                        } : project
                ),
                activeProject: {...state.activeProject,
                    components: state.activeProject.components.map(
                        (component, index) => component.name === action.componentName ?
                                {...state.activeProject.components[index],
                                    tasks: [...state.activeProject.components[index].tasks, 
                                        {
                                            taskID: action.task.taskID,
                                            taskName: action.task.taskName,
                                            assignedTo: action.task.assignedTo,
                                            deadline: action.task.deadline,
                                            taskStatus: action.task.taskStatus,
                                            taskDescription: action.task.taskDescription,
                                        }
                                    ]
                       }: component
                    ) 
                }
            }
            case "addNewComponentTask":
                return {...state,
                    projectList: state.projectList.map(
                        (project, index) => project.projectID === action.projectID ?
                            {...state.projectList[index], 
    
                                components: state.projectList[index].components.map(
                                    (component, index2) => component.name === action.componentName ?
                                            {...state.projectList[index].components[index2],
    
                                                tasks: [...state.projectList[index].components[index2].tasks,
    
                                                    {
                                                        taskID: action.task.taskID,
                                                        taskName: action.task.taskName,
                                                        assignedTo: action.task.assignedTo,
                                                        deadline: action.task.deadline,
                                                        taskStatus: action.task.taskStatus,
                                                        taskDescription: action.task.taskDescription,
                                                    }
                                                ]
                                            }: component
                                )
                            } : project
                    ),
                    activeProject: {...state.activeProject,
                        components: state.activeProject.components.map(
                            (component, index) => component.name === action.componentName ?
                                    {...state.activeProject.components[index],
                                        tasks: [...state.activeProject.components[index].tasks, 
                                            {
                                                taskID: action.task.taskID,
                                                taskName: action.task.taskName,
                                                assignedTo: action.task.assignedTo,
                                                deadline: action.task.deadline,
                                                taskStatus: action.task.taskStatus,
                                                taskDescription: action.task.taskDescription,
                                            }
                                        ]
                                    }: component
                        ) 
                    }
                }
        case "editProjectDescription":
            return{...state,
                projectList : state.projectList.map(
                    (project, index) => project.projectID === action.projectID ?
                        {...state.projectList[index], description: action.description} : project
                ), 
                activeProject: { 
                    ...state.activeProject,
                    description: action.description
                } 
            }
        default:
            return state   
    }
};

const initialReducerValues = {
    projectList: [],
    projectTitle: "",
    activeProject: {
        projectID: "",
        projectTitle: "",
        projectStatus: "",
        projectCreatedAt: "",
        projectDeadline: "",
        type: "",
        description: "",
        history: [
            {
                date: "",
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
                name: "Backlog",
                tasks: []
            },
            {
                name: "Doing",
                tasks: []
            },
            {
                name: "Completed!",
                tasks: []
            }
        ]
    },
    projectTemplate: {
        projectID: "",
        projectTitle: "",
        projectStatus: "",
        projectCreatedAt: "",
        projectDeadline: "",
        type: "",
        description: "",
        history: [
            {
                date: "",
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
                name: "Backlog",
                tasks: []
            },
            {
                name: "Doing",
                tasks: []
            },
            {
                name: "Completed!",
                tasks: []
            }
        ]
    }
}

// projectList: state.projectList.map((element, index) => {
                // if(element.projectID === action.activeProject.projectID){
                //     return {...state.projectList[index], projectTitle: action.activeProject.projectTitle}
                // }}), 

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

    const [{projectList, projectTitle, activeProject}, dispatch] = useReducer(reducer, initialReducerValues) 
    
    const _handleAddProject = (e) => {
        e.preventDefault();
        let projectTitle = document.getElementById("project_name").value;
        let projectID = idGenerator(10);
        
        let format = {year: 'numeric', month: 'short', day: 'numeric'};
        let projectCreatedAt = new Date().toLocaleDateString('en-ph', format) ;

        document.getElementById("project_name").value = ""
        dispatch({
            type: "addProject", projectTitle, projectID, projectCreatedAt
        })
    }
 
    const _openProject = (givenID) => {  
        let openedProj = {};
        projectList.map(
            (project, index) => project.projectID === givenID ?
                (   
                    openedProj = {...project},
                    console.log("success!")
                ) :
                console.log("nothing")
        )
        dispatch({
            type: "openProject", openedProj
        })
        console.log(projectList) 
    }

    const _editProjectTitle = (projectID, projectTitle) => {
        if((projectTitle && projectID) && projectTitle !== " "){ 
            dispatch({type: "editProjectTitle", projectID, projectTitle});
            console.log("TITLE HAS BEEN CHANGED")
        }
    }
    const _editProjectDeadline = (projectID, projectDeadline) => {
        dispatch({type: "setProjectDeadline", projectID, projectDeadline})
        console.log("DEADLINE HAS BEEN CHANGED")
    }

    const _editProjectStatus = (projectID, projectStatus) => {
        dispatch({type: "editProjectStatus", projectID, projectStatus});
        console.log("Status HAS BEEN CHANGED", activeProject.projectStatus)
    }

    const _addNewComponentTask = (projectID, componentName, task) => {
        dispatch({type:"addNewComponentTask", projectID, componentName, task});
        console.log("New TASK HAS BEEN ADDED", projectList);
    }
    const _editComponentTask = (projectID, componentName, task) =>{
        dispatch({type:"editComponentTask"})
        console.log("EDITED TASK", projectList);
    }
    const _editProjectDescription = (projectID, description) =>{
        dispatch({type: "editProjectDescription", projectID, description})
        console.log("EDITED DESC", projectList);
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
                    activeProject={activeProject}/>

                <ProjectOverview 
                    editProjectDescription={_editProjectDescription}
                    activeProject={activeProject}
                    projectList={projectList}
                    editProjectTitle={_editProjectTitle}
                    editProjectDeadline={_editProjectDeadline}
                    editProjectStatus={_editProjectStatus}
                    addNewComponentTask={_addNewComponentTask}
                    editComponentTask={_editComponentTask} 
                    />
                    
            </div> 
        </div>
    );     
}; 

export default App; 
