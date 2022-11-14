import {useState} from 'react'
import Type from './Type'
import useProjects from "../../../ProjectsContext";

export default function StatusContainer(){
    const [options, setOption] = useState(["personal", "work", "practice", "hobby"]);
    const { currentProject, editProjType } = useProjects();
    const changeType = (e) => {
        const newType = document.getElementById("project-type").value;
        editProjType(currentProject.projectID, newType)
    }
    return(
        <form method="POST">
            <select id="project-type" onChange={changeType}>
                {
                    options.map((option, index)=>{
                        return(
                            <Type keys={index} value={options[index].toLowerCase()} />
                        )
                    })
                }
            </select>
        </form>
    )
}