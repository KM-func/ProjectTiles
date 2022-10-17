import './assets/stylesheets/style.scss';
import React, { useState } from 'react'; 
import Tag from './Tag'; 

export default function TagsContainer(props){
    const randNum = (min, max) =>{ 
        return Math.floor(Math.random() * (max - min) ) + min; 
    }
    
    const [tags, setTag] = useState([ 
    ]);
    const addTag = (e) => {
        e.preventDefault()

        let colorList = [
            "ube",
            "cherry",
            "green",
            "teal"
        ]
        
        setTag([...tags, {name: document.getElementById("add-tag").value, color: colorList[randNum(0,4)]}]);
        document.getElementById("add-tag").value = "";
    }  

    return (<div className='tag-container'>
        <div className='header'>
            <p>Tags</p> 
        </div>
        <div className='body'>
            <form onSubmit={addTag}>
                <input type={"text"} name="add-tag" id="add-tag" placeholder='add tag' />
            </form>
            {tags.map((tag, index) => {
                return  <Tag key={index} color={tag.color} tagName={tag.name} />
            }).reverse()}
        </div>
    </div>)
}