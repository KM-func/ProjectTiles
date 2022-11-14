
import EditSymbol from './assets/images/edit-icon.svg';

export default function TargetCompletion(props){
    const linkHandler = e =>{
        e.preventDefault();
    } 

    return (<form>
        <h2> Target Completion: {props.activeProject.projectDeadline} </h2>
        <input type="date" id="project-deadline" />
        
    </form>)
} 