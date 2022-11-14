import { createContext, useReducer, useContext } from "react";
import projectsReducer, { initialState } from "./projectsReducer";

const ProjectsContext = createContext(initialState);
let format = {year: 'numeric', month: 'short', day: 'numeric'};
let currentDate = new Date().toLocaleDateString('en-ph', format);

export const ProjectsProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(projectsReducer, initialState);
    // // have current product be removed from the reducer. let reducer be a simple list? taht is updated based on the current chosen item from the projectList
    
    const addNewProject = (project) => {
        const updatedProjects = state.projects.concat(project);
        dispatch({
            type: "ADD_NEW_PROJECT",
            payload: {
                projects: updatedProjects,
                // -1 is meant to choose the most recently added project.
                currentProject: updatedProjects[updatedProjects.length - 1]
            }
        })
    }
    const deleteProject = (projectID, newCurrProj, projects) => {
        if(projects.length > 0 && [projects.length - 1] > 0){
            dispatch({
                type: "DELETE_PROJECT",
                payload: {
                    projectID: projectID,
                    currentProject: newCurrProj
                }
            })
        } else if (projects.length === 1){
            dispatch({
                type: "DELETE_LAST_PROJ",
                payload: {
                    projectID: projectID
                }
            })
        }
    }
    const selectProject = (projectID) =>{
        let newCurrProj = {};
        state.projects.map(
            (project, index) =>
                project.projectID === projectID ?
                   newCurrProj = {...project}: null
        )
        dispatch({
            type: "SELECT_PROJECT",
            payload: {
                currentProject: newCurrProj 
            }
        })
    }

    const editProjectTitle = (projectID, newTitle) => {
        dispatch({
            type: "EDIT_TITLE",
            payload: {
                projectID: projectID,
                projectName: newTitle,
                historyUpdate: {
                    date: currentDate,
                    entry: `Changed project name to ${newTitle}`
                }
            }
        })
    }

    const editTargetCompletion = (projectID, newDate) => {
        let format = {year: 'numeric', month: 'short', day: 'numeric'};
        let formattedDate = new Date(newDate).toLocaleDateString('en-ph', format);
        dispatch({
            type: "EDIT_TARGET_COMPLETION",
            payload: {
                projectID: projectID,
                targetCompletion: formattedDate,
                historyUpdate: {
                    date: formattedDate,
                    entry: `Changed target completion to ${formattedDate}`
                }
            }
        })
    }

    const editDescription = (projectID, newDesc) => {
        dispatch({
            type: "EDIT_DESCRIPTION",
            payload: {
                projectID: projectID,
                description: newDesc,
                historyUpdate: {
                    date: currentDate,
                    entry: `Changed project description`
                }
            }
        })
    }

    const editProjStatus = (projectID, newProjStatus) => {
        dispatch({
            type: "EDIT_PROJ_STATUS",
            payload: {
                projectID: projectID,
                projectStatus: newProjStatus,
                historyUpdate: {
                    date: currentDate,
                    entry: `Changed project status to "${newProjStatus}"`
                }
            }
        })
    }

    const editProjType = (projectID, newProjType) => {
        dispatch({
            type: "EDIT_PROJ_STATUS",
            payload: {
                projectID: projectID,
                projectType: newProjType,
                historyUpdate: {
                    date: currentDate,
                    entry: `Set project type to "${newProjType}"`
                }
            }
        })
    }

    const addTag = (projectID, newTag) => {
        dispatch({
            type: "ADD_TAG",
            payload: {
                projectID: projectID,
                tag: newTag,
                historyUpdate: {
                    date: currentDate,
                    entry: `Added project tag "${newTag.name}"`
                }
            }
        })
    }
    
    const removeTag = (projectID, tagName) => {
        dispatch({
            type: "REMOVE_TAG",
            payload: {
                projectID: projectID,
                deletedTag: tagName,
                historyUpdate: {
                    date: currentDate,
                    entry: `Removed project tag "${tagName}"`
                }
            }
        })
    }

    const addMember = (projectID, newMember) => {
        dispatch({
            type: "ADD_MEMBER",
            payload: {
                projectID: projectID,
                member: newMember,
                historyUpdate: {
                    date: currentDate,
                    entry: `Added project member ${newMember.name} as ${newMember.role}`
                }
            }
        })
    }

    const removeMember = (projectID, memberName) => {
        dispatch({
            type: "REMOVE_MEMBER",
            payload: {
                projectID: projectID,
                deletedMember: memberName,
                historyUpdate: {
                    date: currentDate,
                    entry: `Removed team member "${memberName}"`
                }
            }
        })
    }

    const addComponent = (projectID, newComponent) => {
        dispatch({
            type: "ADD_COMPONENT",
            payload: {
                projectID: projectID,
                component: {
                    name: newComponent,
                    tasks: []
                },
                historyUpdate: {
                    date: currentDate,
                    entry: `Added project component "${newComponent}"`
                }
            }
        })
    }

    const deleteComponent = (projectID, deletedComponent) => {
        dispatch({
            type: "DELETE_COMPONENT",
            payload: {
                projectID: projectID,
                deletedComponent: deletedComponent,
                historyUpdate: {
                    date: currentDate,
                    entry: `Deleted project component "${deletedComponent}"`
                }
            }
        })
    }

    const addComponentTask = (projectID, newTask) => {
        dispatch({
            type: "ADD_COMPONENT_TASK",
            payload: {
                projectID: projectID,
                task: newTask,
                historyUpdate: {
                    date: currentDate,
                    entry: `Added task "${newTask.name}" assigned to ${newTask.assignedTo} in ${newTask.status}`
                }
            }
        })
    }
    
    const editComponentTask = (projectID, editedTask, oldStatus, oldName) => {
        if(editedTask.status === oldStatus){
            if(editedTask.name === oldName){
                dispatch({
                    type: "EDIT_COMPONENT_TASK",
                    payload: {
                        projectID: projectID,
                        task: editedTask,
                        historyUpdate: {
                            date: currentDate,
                            entry: `Edited task "${editedTask.name}", currently assigned to ${editedTask.assignedTo}`
                        }
                    }
                })
            } else {
                dispatch({
                    type: "EDIT_COMPONENT_TASK",
                    payload: {
                        projectID: projectID,
                        task: editedTask,
                        historyUpdate: {
                            date: currentDate,
                            entry: `Edited task "${editedTask.name}", currently assigned to ${editedTask.assignedTo} (prev. name ${oldName})`
                        }
                    }
                })
            }
            
        } else{
            console.log(editedTask)
            dispatch({
                type: "DELETE_COMPONENT_TASK",
                payload: {
                    projectID: projectID,
                    taskID: editedTask.taskID
                }
            })
            if(editedTask.name === oldName){
                dispatch({
                    type: "ADD_COMPONENT_TASK",
                    payload: {
                        projectID: projectID,
                        task: editedTask,
                        historyUpdate: {
                            date: currentDate,
                            entry: `Changed status of task "${editedTask.name}" to "${editedTask.status}"`
                        }
                    }
                })
            } else {
                dispatch({
                    type: "ADD_COMPONENT_TASK",
                    payload: {
                        projectID: projectID,
                        task: editedTask,
                        historyUpdate: {
                            date: currentDate,
                            entry: `Changed status of task "${editedTask.name}" to "${editedTask.status}" (prev. name ${oldName})`
                        }
                    }
                })
            }
        }
    }
    const handleDragDropped = (projectID, editedTask, oldName) => { 
        dispatch({
            type: "DELETE_COMPONENT_TASK",
            payload: {
                projectID: projectID,
                taskID: editedTask.taskID
            }
        }) 
        if(editedTask.status !== oldName){
            
            dispatch({
                type: "ADD_COMPONENT_TASK",
                payload: {
                    projectID: projectID,
                    task: editedTask,
                    historyUpdate: {
                        date: currentDate,
                        entry: `Changed status of task "${editedTask.name}" to "${editedTask.status}" (prev. name ${oldName})`
                    }
                }
            })
        } else {
            dispatch({
                type: "ADD_COMPONENT_TASK",
                payload: {
                    projectID: projectID,
                    task: editedTask, 
                }
            })
        }
    }
    const deleteTask = (projectID, taskID, taskName, taskStatus) => {
        dispatch({
            type: "DELETE_COMPONENT_TASK",
            payload: {
                projectID: projectID,
                taskID: taskID,
                historyUpdate: {
                    date: currentDate,
                    entry: `Deleted task "${taskName}" from "${taskStatus}"`
                }
            }
        })
    }

    const value = {
        projects : state.projects,
        currentProject : state.currentProject,
        projectTemplate : state.projectTemplate,
        addNewProject,
        selectProject,
        editProjectTitle,
        editTargetCompletion,
        editDescription,
        editProjStatus,
        addTag,
        addMember,
        addComponentTask,
        editComponentTask,
        deleteTask,
        addComponent,
        deleteProject,
        editProjType,
        removeTag,
        removeMember,
        deleteComponent,
        handleDragDropped
    }

    return <ProjectsContext.Provider value={value}>
        {children}
    </ProjectsContext.Provider>
};

const useProjects = () => {
    const context = useContext(ProjectsContext); 
    // console.log(context)
    if (context === undefined) {
        console.log("CONTEXT IS UNDEFINED")
        throw new Error("useProjects must be used within ProjectsContext")
    }
    return context;
}

export default useProjects;