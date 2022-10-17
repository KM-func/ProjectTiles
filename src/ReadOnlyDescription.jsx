export default function ReadOnlyDescription(props){
    return(
        <p>
            {props.description ? 
                props.description :
                "no description set!"
            }
        </p> 
    )
}