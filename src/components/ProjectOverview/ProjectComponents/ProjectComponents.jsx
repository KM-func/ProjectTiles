
import { useState } from "react";
import useProjects from "../../../ProjectsContext";
import AddComponent from "./AddComponent"
import Component from "./Component";
import addIcon from "../../../assets/images/add-icon.svg"

export default function Components(){
    const { currentProject } = useProjects();
    const [addComponent, setAddComponent] = useState(false);

    const changeAddComponent = (e) =>{
        e.preventDefault();
        if(addComponent === false){
            setAddComponent(true);
        } else{
            setAddComponent(false);
        }
    }

    return(
        <div className="project-components">
            <h1>
                Project Components
                <a href="/" onClick={changeAddComponent}><img src={addIcon} alt="delete icon"/></a>
            </h1>
            <AddComponent add={addComponent} close={changeAddComponent}/>
            <div className="content">
                {
                    currentProject.components.length !== 0 ?
                    currentProject.components.map(
                        (component, index) => {
                            return (
                                <Component key={index} {...component} />
                            )
                        }
                    ) : <p>No Components Set!</p>
                }
            </div>
        </div>
    )
}