import useProjects from "../../../ProjectsContext";

export default function Status(props){
    const { currentProject } = useProjects(); 

    if(currentProject.projectStatus === props.value){
        return (
            <option value={props.value} className={props.value} selected>
                <span id="status-dot">• </span>
                {props.value}
            </option>
        )
    } else {
        return(
            <option className={props.value} value={props.value}>
                <span id="status-dot">• </span>
                {props.value}
            </option>
        )
    }
    
}