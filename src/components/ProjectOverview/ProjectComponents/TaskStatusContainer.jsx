import useProjects from "../../../ProjectsContext";

export default function TaskStatusContainer(props){
    const { currentProject } = useProjects();

    return(
        <select id="task-status">
            {
                currentProject.components !== undefined ?
                currentProject.components.map(
                    (component, index) => {
                        if(component.name === props.status){
                            return (
                                <option value={component.name} selected>{component.name}</option>
                            )
                        } else{
                            return (
                                <option value={component.name}>{component.name}</option>
                            )
                        }
                    }
                ) : <></>
            }
        </select>
    )
}