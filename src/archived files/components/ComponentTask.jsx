export default function ComponentTask(props){
    const handleOpen = (e) =>{
        e.preventDefault()
        props.handleOpenTask(e.target.id);
        props.handleOpenedTaskDetails(props.task)
    }
    return (
        <div className='component-task'>
            <a href='/' id={props.id} onClick={handleOpen}>
                {props.name}
            </a>
            <p className='grayed'>
                {props.assignedTo}
            </p>
            <p>
                {props.deadline}
            </p>
        </div>
    )
}