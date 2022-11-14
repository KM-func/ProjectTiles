export default function Tag(props){
    return(
        <p className={props.color}>
            {props.tagName}
            <i className=""></i>
        </p>
    )
}