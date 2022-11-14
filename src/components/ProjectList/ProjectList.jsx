import useProjects from "../../ProjectsContext";
import Project from "./Project";  
import addIcon from "../../assets/images/add-icon.svg"

export default function ProjectList(){
    const { projects, selectProject, addNewProject, projectTemplate } = useProjects();

    const idGenerator = length => {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 
            charactersLength));
       }
       return result;
    }

    const _addNewProject = (e) =>{
        
        let format = {year: 'numeric', month: 'short', day: 'numeric'};
        let createdAt = new Date().toLocaleDateString('en-ph', format);

        e.preventDefault();
        let newProj = {
            ...projectTemplate,
            projectName : document.getElementById("new_project").value,
            projectID: idGenerator(8),
            createdAt: createdAt,
            history: [
                {
                    date: createdAt,
                    entry: `Created Project ${document.getElementById("new_project").value}`
                }
            ],
            teamMembers:[
                {
                    name: "Me",
                    role: "admin"
                }
            ]
        };
        console.log(newProj)
        addNewProject(newProj)

        document.getElementById("new_project").value = ""
    }

    return(
        <div className="project-list">
            <div className="header">
                <h1>Projects</h1>
                <form onSubmit={_addNewProject}>
                    <img src={addIcon} alt="add-icon"/>
                    <input id="new_project" type={"text"} placeholder="add new"/>
                </form>
            </div>
            <div className="content">
                {
                    
                    projects.map((project, index) =>{
                        return (
                            <Project selectProject={selectProject} key={index} {...project} />
                        )
                    }).reverse()
                }
            </div>
        </div>
    )
}