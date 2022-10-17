import './assets/stylesheets/style.scss'; 
import CloseIcon from './assets/images/close-icon.svg'

export default function AddNewTaskModal(props){
    return (
        <div className="modal-container">
            <div className="modal container" > 
                <a href='/' onClick={props.handleClose} className="close-button">
                    <img src={CloseIcon} alt="close icon"/>
                </a>
                <div className='header'>
                    <form onSubmit={props.handleSavedState}>
                        <h1 className='indicator'>Add new component task</h1>
                        <input id='task-name' type={"text"} placeholder={"Enter New Title"}/>
                        <h2>
                            Assigned to:
                            <select id='task-assigned-to'>
                                {/* This can only select from existing team members */}
                                <option className='not-started' value={"KM Funcion"}>KM Funcion</option> 
                            </select>
                        </h2>
                    </form> 
                </div>
                
                <form onSubmit={props.handleSavedState}> 
                    <p>
                        Deadline: <input type="date" id="task-deadline"/> 
                    </p>
                    <select id='task-status' className='task-status'>
                        <option className='not-started' value={"not_started"}>not started</option>
                        <option className='active' value={"active"}>active</option>
                        <option className='postponed' value={"postponed"}>postponed</option>
                        <option className='cancelled' value={"cancelled"}>cancelled</option>
                    </select>
                </form>

                <form className='description' onSubmit={props.handleSavedState}>
                    DESCRIPTION:
                    <textarea id='task-description'>

                    </textarea>
                </form>
                <div className='submission-buttons'>
                    <a className='close' onClick={props.handleClose} href='/'>
                        CANCEL
                    </a>
                    <a className='save' onClick={props.handleSavedState} href='/'>
                        SAVE
                    </a>
                </div> 
            </div>
        </div>
    )
}