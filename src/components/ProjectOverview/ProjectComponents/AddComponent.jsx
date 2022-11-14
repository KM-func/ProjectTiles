import useProjects from "../../../ProjectsContext";

export default function AddTaskModal(props){
    const { currentProject, addComponent } = useProjects();
    const _addComponent = (e) => {
        e.preventDefault();
        addComponent(currentProject.projectID, document.getElementById("component-name").value)
        props.close(e)
    }
    if(props.add){
        return(
            <div className="modal"> 
                <div className="content add-component">
                    <a href="/" className="close" onClick={props.close}>x</a>
                    <h1>Add Component</h1>
                    <form method="POST" onSubmit={_addComponent}>
                        <label> 
                            Name:
                            <input id="component-name" type={"text"} placeholder="Component Name" />
                        </label>
                        <input type={"submit"} value="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}