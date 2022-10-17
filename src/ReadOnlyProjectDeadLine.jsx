import EditSymbol from './assets/images/edit-icon.svg';

export default function ReadOnlyProjectDeadline(props){
    const linkHandler = e =>{
        e.preventDefault();

        props.setDeadline(true);
    } 
    
    return(
        
        <h2>
            Target Deadline:  
        {props.targetDeadline ?  
            (" ", props.targetDeadline): 
            "No Deadline Set!"}
            <a href="/" onClick={linkHandler}><img src={EditSymbol} alt="edit symbol" /></a>
        </h2> 
    )
}