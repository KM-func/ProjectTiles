import { useState } from "react";
import useProjects from "../../../ProjectsContext";
import editIcon from "../../../assets/images/edit-icon.svg" 
export default function Title(){ 
    const { currentProject, editProjectTitle } = useProjects();
    const [edit, changeEdit] = useState(false);

    const setEdit = (e) =>{
        e.preventDefault();
        if(edit === false){
            changeEdit(true)
        } else {
            changeEdit(false)
        }
    }

    const setEditOnEnter = (e) =>{
        if(e.key === 'Enter' && edit === true){
            changeEdit(false)
            changedTitle(e)
        }
    }
 
    const changedTitle = (e) =>{
        e.preventDefault();
        const selectedProj = currentProject.projectID;
        editProjectTitle(selectedProj, document.getElementById(selectedProj).innerText)
    }
    
    if(edit === false){ 
        if(currentProject.projectName !== ""){
            return( // don't forget to add e argument inside a callback function of a react onClick event listener or similar
            <div>
                <h1 id={currentProject.projectID} contentEditable={false} onKeyDown={setEditOnEnter}>
                    {currentProject.projectName} 
                </h1>
                <h1> 
                    <a href="/" onClick={(e) => {changedTitle(e); setEdit(e)}}　><img src={editIcon} alt="edit icon" /></a>
                </h1>
            </div>
            )
        } else {
            return( // don't forget to add e argument inside a callback function of a react onClick event listener or similar
            <div>
                <h1 id={currentProject.projectID} contentEditable={false} onKeyDown={setEditOnEnter}>
                    No Current Project Selected
                </h1>
            </div>
            )
        }
    } else {
        return( // don't forget to add e argument inside a callback function of a react onClick event listener or similar
            <div>
                <h1 className="editable proj-title" id={currentProject.projectID} contentEditable={true} onKeyDown={setEditOnEnter}>
                    {currentProject.projectName} 
                </h1> 
                <a href="/" onClick={(e) => {changedTitle(e); setEdit(e)}}　>
                    save
                </a> 
            </div>
        )
    }
}