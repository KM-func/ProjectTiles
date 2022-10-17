import EditSymbol from './assets/images/edit-icon.svg';

export default function ReadOnlyTitle(props){
    const linkHandler = e =>{
        e.preventDefault();

        props.setTitle(true);
    } 
    
    return(
        
        <h1>
            {props.title ?  
             props.title: 
            "No Project Selected!"}
            <a href="/" onClick={linkHandler}><img src={EditSymbol} alt="edit symbol" /></a>
        </h1> 
    )
}