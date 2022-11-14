import { useState } from "react";
import useProjects from "../../../ProjectsContext";
import editIcon from "../../../assets/images/edit-icon.svg"

export default function TargetCompletion(){
    const { currentProject, editTargetCompletion } = useProjects();

    const [edit, changeEdit] = useState(false);
 
    const formattedDate = new Date().toISOString().split("T")[0];

    const setEdit = (e) =>{
        e.preventDefault();
        if(edit === false){
            changeEdit(true)
        } else {
            changeEdit(false)
        }
    }
 
    const changedTargetCompletion = (e) =>{
        const projID = currentProject.projectID;
        const newDate = document.getElementById("project-date").value;
        editTargetCompletion(projID, newDate);
        console.log("changed DATE")
    }
    
    if(edit === false){
        return(
            <div>
                <h3 contentEditable="false">
                    Target Completion: {
                        currentProject.targetCompletion !== "" ?
                            currentProject.targetCompletion :
                            "No Target Completion set!"
                    }
                </h3> 
                <a href="/" onClick={setEdit}><img src={editIcon} alt="edit icon"/></a> 
            </div>
        )
    } else {
        return(
            <div className="target-completion editing">
                <form onBlur={(e) => {changedTargetCompletion(e); setEdit(e)}}>
                    <h3>
                        Target Completion:
                    </h3>
                    <input type={"date"} min={formattedDate} id="project-date"/>
                </form> 
                <a href="/" onClick={(e) => {changedTargetCompletion(e); setEdit(e)}} className="save">save</a> 
            </div>
        )
    }
}