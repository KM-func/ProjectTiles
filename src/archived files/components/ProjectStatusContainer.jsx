import { useState } from "react";
import Status from "./Status";


export default function ProjectStatusContainer(props){
 
    const [options, setOption] = useState(["not started", "active", "postponed", "cancelled"]);
    return(
        <form onSubmit={props.editProjectStatus} onBlur={props.editProjectStatus}> 
            <select id='project-status' onBlur={props.editProjectStatus}>
                {options.map((option, index) => {
                    return <Status key={index} option={options[index]} status={props.status}/>
                })}
            </select> 
        </form>
    )
}