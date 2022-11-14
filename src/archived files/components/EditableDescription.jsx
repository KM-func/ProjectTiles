export default function EditableDescription(props){

    return (
        <form>
            <textarea id="project-description" name="project-description" rows="4" cols="50">{props.description}</textarea>
        </form>
    )
}