export default function HistoryEntry(props){
    if(props.date !== undefined && props.entry !== undefined){
        return(
            <p>
                {props.date}: {props.entry}
            </p>
        )
    }
}