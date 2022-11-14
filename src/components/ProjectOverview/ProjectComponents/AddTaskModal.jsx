import useProjects from "../../../ProjectsContext";
import TeamMember from "./TeamMembers";
import TaskStatusContainer from "./TaskStatusContainer";
import closeIcon from "../../../assets/images/close-icon.svg"

export default function AddTaskModal(props){
    const { currentProject, addComponentTask } = useProjects();
    const formattedDate = new Date().toISOString().split("T")[0];

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

    const addTask = (e) =>{
        e.preventDefault();
        let format = {year: 'numeric', month: 'short', day: 'numeric'};
        let deadlineRaw = document.getElementById("task-deadline").value;
        let formattedDate = new Date(deadlineRaw).toLocaleDateString('en-ph', format);

        const newTask = { 
            taskID: idGenerator(10),
            name: document.getElementById("task-name").value,
            assignedTo:  document.getElementById("task-assigned-to").value,
            deadline:  formattedDate,
            status:  document.getElementById("task-status").value,
            description:  document.getElementById("task-description").value,
        };
        addComponentTask(currentProject.projectID, newTask, props.name);
        props.close(e);
    }
    
    if(props.add){
        return(
            <div id="add-task-modal" className="modal">
                <div className="content">
                    <a href="/" className="close" onClick={props.close}>
                        <img src={closeIcon} alt="add-icon"/>
                    </a>
                    <h2>Add Task</h2>
                    <form onSubmit={addTask}>
                        <label>
                            Name: <input id="task-name" type={"text"} required placeholder="Task Name"/>
                        </label>
                        <label>
                            Assigned To:
                            <select id="task-assigned-to">
                                {currentProject.teamMembers.map((member, index)=>{
                                    return(
                                        <TeamMember key={index} {...member} />
                                    )
                                })}
                            </select>
                        </label>
                        <label>
                            Deadline:
                            <input id="task-deadline" min={formattedDate} type={"date"} defaultValue={formattedDate} /> 
                        </label>
                        <label>
                            Status:
                            <TaskStatusContainer {...currentProject.components} status={props.name} />
                        </label>
                        <label>
                            Description: 
                            <textarea id="task-description" placeholder="Task Description"></textarea>
                        </label>
                        <input value={"add task"} type={"submit"}/>
                    </form>
                </div>
            </div>
        )
    }
}