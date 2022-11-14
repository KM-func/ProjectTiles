import Member from "./Member";
import useProjects from "../../../ProjectsContext";
import addIcon from "../../../assets/images/add-icon.svg"
export default function ProjectMembers(){
    const { currentProject, addMember} = useProjects();
    const add = (e) => {
        e.preventDefault();
        if(!document.getElementById("project-member").value){
            return null;
        }
        let newMember = {
            name: document.getElementById("project-member").value,
            role: document.getElementById("project-role").value
        };
        addMember(currentProject.projectID, newMember);
        document.getElementById("project-member").value = "";
    }
    return(
        <div className="team">
            <div className="header">
                <h3>
                    Team members
                </h3> 
                <form method='POST' onSubmit={add}>
                    <input type={"text"} id="project-member" placeholder='add member' required/> 
                    <select id="project-role">
                        <option value={"admin"}>admin</option>
                        <option value={"editor"} selected>editor</option>
                    </select>
                    <input type={"image"} src={addIcon} alt="add icon" value="add"/> 
                </form>
            </div>
            <div className="content">
                {
                    currentProject.teamMembers.length !== 0 ?
                    currentProject.teamMembers.map((member, index) =>{
                        return(
                            <Member keys={index} {...member} />
                        )
                    }) : <p>No Project Members set!</p>
                }
            </div>
        </div>
    )
}