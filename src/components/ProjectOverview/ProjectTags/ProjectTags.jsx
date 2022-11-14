import Tag from "./Tag";
import useProjects from "../../../ProjectsContext";
import addIcon from "../../../assets/images/add-icon.svg"
import { useState } from "react";

export default function ProjectTags(){
    const { currentProject, addTag } = useProjects();
    const {color, setColor} = useState()
    const randNum = (min, max) =>{ 
        return Math.floor(Math.random() * (max - min) ) + min; 
    }

    const add = (e) => {
        e.preventDefault(); 
        let colorList = [
            "deep-blue",
            "lilac",
            "bright-red",
            "subtle-green",
            "lilac",
            "bright-red",
            "subtle-green",
            "deep-blue",
        ]

        let chosenColor = colorList[randNum(0, colorList.length-1)]

        addTag(currentProject.projectID, {name: document.getElementById("project-tag").value, color: chosenColor})
        document.getElementById("project-tag").value = "" 
    }
 

    return(
        <div className="tags">
            <div className="header">
                <h3>
                    Tags
                </h3>
                <form method='POST' onSubmit={e=>{add(e)}}>  
                    <input required type={"text"} id="project-tag" placeholder='add tag'/>
                    <input type={"image"} src={addIcon} alt="add icon" value="add"/> 
                </form>
            </div> 
            <div className="content">
                {
                    currentProject.tags.length !== 0 ?
                    currentProject.tags.map((tag, index) =>{
                        return(
                            <Tag keys={index} color={currentProject.tags[index].color} name={currentProject.tags[index].name} />
                        )
                    }) : <p>No Tags Set!</p>
                }
            </div>
        </div>
    )
}