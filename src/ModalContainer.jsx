import { useState } from "react"
import EditableTaskModal from "./EditableTaskModal"
import ReadOnlyTaskModal from "./ReadOnlyTaskModal"

export default function ModalContainer(props){
    const [editTask, setEditTask] = useState(false);
    
    const handleEditState = e =>{
        e.preventDefault(); 
        setEditTask(true);
    } 
    const handleSavedState = e =>{
        e.preventDefault();
        console.log("saved")
        setEditTask(false);
    }
    const handleCancel = e =>{
        e.preventDefault();
        props.handleSaveEdit(e)
        setEditTask(false);
    }
    return (
        <div className="modal-container">
            {
                editTask ? 
                <EditableTaskModal task={props.task} handleClose={props.handleClose} handleCancel={handleCancel} handleSaveEdit={handleSavedState} /> :
                <ReadOnlyTaskModal task={props.task} handleClose={props.handleClose} handleEditState={handleEditState} />
            } 
        </div>
    )
}