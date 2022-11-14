export default function EditableProjectDeadline(props){
    return (<form onBlur={props.changeDeadline} onSubmit={props.changeDeadline}>
        <h2>Target Deadline:</h2>
        <input type="date" id="project-deadline" onBlur={props.changeDeadline}/> 
    </form>)
}