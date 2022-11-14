import useProjects from "../../../ProjectsContext";
import closeIcon from "../../../assets/images/remove-icon.svg" 

export default function Tag(props){
    const { currentProject, removeTag } = useProjects();
    
    const deleteTag = (e) =>{
        e.preventDefault()
        removeTag(currentProject.projectID, props.name)
        console.log("tag deleted")
    }
    return( 
            <p className={props.color}>
                {props.name}
                <a onClick={deleteTag} href="/" className="delete"><img src={closeIcon} alt="edit icon"/></a>
            </p>
    )
}