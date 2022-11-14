import HistoryEntry from "./HistoryEntry";
import useProjects from "../../../ProjectsContext";

export default function History(){
    const { currentProject } = useProjects();

    return(
        <div className="history">
            <h1>History</h1>
            <div>
                {
                    currentProject.history !== undefined ? 
                    currentProject.history.map((entry, index) =>{
                        return(
                            <HistoryEntry keys={index} {...entry}/>
                        )
                    }).reverse() : <></>
                }
            </div> 
        </div>
    )
}