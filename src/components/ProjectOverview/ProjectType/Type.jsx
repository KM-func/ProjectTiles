import useProjects from "../../../ProjectsContext";

export default function Type(props){
    
    const { currentProject } = useProjects();

    if(currentProject.projectType === props.value){
        return (
            <option value={props.value} selected>
                {props.value}
            </option>
        )
    } else {
        return(
            <option value={props.value}>
                {props.value}
            </option>
        )
    }
}