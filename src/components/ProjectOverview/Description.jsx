import { useState } from "react";
import useProjects from "../../ProjectsContext";
import editIcon from "../../assets/images/edit-icon.svg"

export default function Description(){
    const { currentProject, editDescription } = useProjects();
    const [edit, changeEdit] = useState(false);

    const setEdit = (e) =>{
        e.preventDefault();
        if(edit === false){
            changeEdit(true)
        } else {
            changeEdit(false)
        } 
    }

    const changeDesc = (e) =>{
        const newDesc = document.getElementById("project-description").innerText
        editDescription(currentProject.projectID, newDesc)

        
    }

    const changeDescOnEnter = (e) =>{
        if(e.key === "Enter" && !e.shiftKey){
            const newDesc = document.getElementById("project-description").innerText
            editDescription(currentProject.projectID, newDesc)
            setEdit(e)
        }
    }

    if(edit === true){
        return(
            <div className="description">
                <div>
                    <h1>Description</h1> 
                    <a href="/" className="save" onClick={(e)=>{setEdit(e); changeDesc(e)}}>save</a>
                </div>
                <p contentEditable="true" id="project-description" className="editable" onKeyDown={changeDescOnEnter}>
                    {currentProject.description} 
                </p>
            </div>
        )
    } else {
        return(
            <div className="description">
            <div>
                <h1>Description</h1> 
                    <a href="/" onClick={(e)=>{setEdit(e); changeDesc(e)}}>
                        <img src={editIcon} alt="edit icon"/>
                    </a> 
            </div>
            <p contentEditable="false">
                {
                    currentProject.description !== "" ? 
                        currentProject.description :
                        "No Description set!" 
                }
            </p>
        </div>
        )
    }
}