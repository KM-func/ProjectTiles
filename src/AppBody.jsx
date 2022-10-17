
import './assets/stylesheets/style.scss';
import React, { useState, useEffect } from 'react'; 
import ProjectList from './ProjectList'

function AppBody(){
    return <div className="app">  
        <ProjectList />
    </div>;    
}; 

export default AppBody; 
