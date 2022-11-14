import './assets/stylesheets/style.scss';
// import React, { useState, useEffect } from 'react'; 
import Trash from './assets/images/delete-icon.svg'
import EditSymbol from './assets/images/edit-icon.svg'

export default function ProjectHistory(props){
    const projHistory = [ 
        {date: "October 17, 2022", entry:"Project has been created"}
    ]

    return(
        <div className='history info-container'>
            <div className='project-info-header'>
                <div className='header-title'>
                    <h3>Project history</h3> 
                </div>
                <ul className='project-info-content'>
                    {
                        projHistory.map((entry, index) => {
                            // console.log(project)
                            return (
                                <li key={index}>
                                    {entry.date}: {entry.entry}
                                </li>
                            )
                        }).reverse()
                    }
                </ul>
            </div>
        </div>
    )
}