export default function TeamMember(props){
    if(props.role === "admin"){
        return(
            <option value={props.name} selected>
                {props.name} ({props.role})
            </option>
        )
    } else {
        return(
            <option value={props.name}>
                {props.name} ({props.role})
            </option>
        )
    }
    
}