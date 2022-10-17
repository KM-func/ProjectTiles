export default function ProjectMember(props){
    return (
        <li>
            <p>{props.memberName}</p>
            ({props.memberRole})
        </li> 
    )
}