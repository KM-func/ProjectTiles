export default function Project(props){ 
    // Changed projects function will be done here
    return(
        <a href="/" className="tab" onClick={
            (e)=>{
                    e.preventDefault();
                    props.selectProject(props.projectID); 
                }
            }>
            {props.projectName}
        </a>
    )
}