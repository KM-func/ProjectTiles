import { useState } from 'react';
import EditSymbol from './assets/images/edit-icon.svg';

export default function EditableTitle(props){  
    return( 
        <form onBlur={props.changeTitle} onSubmit={props.changeTitle}> 
            <input type={"text"} id="project-title" placeholder="Set Title"/> 
        </form>
    )
}