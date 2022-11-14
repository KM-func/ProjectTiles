import {useEffect, useState} from 'react'
import Status from './Status'
import useProjects from "../../../ProjectsContext";

export default function StatusContainer(){
    const { currentProject, editProjStatus } = useProjects();

    const [options, setOption] = useState(["not started", "ongoing", "postponed", "cancelled"]);
    const changeStatus = (e) => {
        const newStatus = document.getElementById("project-status").value;
        editProjStatus(currentProject.projectID, newStatus)
    }

    const changeColor = () =>{
        const status_val = document.getElementById("project-status").value; 
        const status = document.getElementById("project-status");
        if(status_val === "ongoing"){ 
            status.classList = ""
            status.classList.add("ongoing") 
        } else if(status_val === "postponed"){
            status.classList = ""
            status.classList.add("postponed")
        } else if (status_val === "cancelled"){
            status.classList = ""
            status.classList.add("cancelled")
        } else if (status_val === "not started") {  
            status.classList = ""
            status.classList.add("started")
        }
    }
    
    useEffect(
        () => {
            changeColor()
        }, [currentProject]
    )

    return(
        <form method="POST">
            <select id="project-status" onChange={e=>{ changeColor(e); changeStatus(e);}}>
                {
                    options.map((option, index)=>{
                        return(
                            <Status keys={index} value={options[index]} />
                        )
                    })
                }
            </select>
        </form>
    )
}