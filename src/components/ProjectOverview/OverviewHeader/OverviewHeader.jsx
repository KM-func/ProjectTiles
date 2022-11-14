import useProjects from "../../../ProjectsContext";
import StatusContainer from './StatusContainer'
import TargetCompletion from "./TargetCompletion";
import Title from "./Title";
import deleteIcon from "../../../assets/images/delete-icon.svg"

export default function OverviewHeader(){
    const { currentProject, deleteProject, projects} = useProjects();
    
    const _deleteProject = (e) => {
        e.preventDefault();
        
        const newProjList = projects.filter(project => project.projectID !== currentProject.projectID);
        const newCurrProj = newProjList[0]
        deleteProject(currentProject.projectID, newCurrProj, projects); 
    }

    return(
        <div className="header">
                <div className="title">             
                    <Title />
                    <TargetCompletion />
                </div>
                <div className="subtitle-details">
                    <h3>Created at: {currentProject.createdAt}</h3>
                    <StatusContainer />
                </div> 
            <a href="/" onClick={_deleteProject}>
                <img src={deleteIcon} alt="delete icon"/>
            </a>
        </div>
    )
}