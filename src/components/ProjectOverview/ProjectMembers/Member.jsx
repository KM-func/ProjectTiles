import useProjects from "../../../ProjectsContext";
import closeIcon from "../../../assets/images/close-icon.svg"

export default function Member(props){
    const { currentProject, removeMember } = useProjects();
    const _removeMember = (e) => {
        e.preventDefault();
        removeMember(currentProject.projectID, props.name)
        console.log("member removed")
    }
    
    return( 
        <div className="member">
            <p >
                {props.name} ({props.role}) 
            </p> 
            <a href="/" className="delete" onClick={_removeMember}>
                <img src={closeIcon} alt="edit icon"/>
            </a>
        </div>
       
    )
}