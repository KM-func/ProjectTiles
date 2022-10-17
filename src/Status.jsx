export default function Status(props){
    if (props.status === props.option){
        return <option className={props.option} value={props.option} selected>
            {props.option}
        </option>
    } else {
        return <option className={props.option} value={props.option}>
            {props.option}
        </option>
    }
}