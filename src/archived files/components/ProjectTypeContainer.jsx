export default function ProjectTypeContainer(props){

    const projTypeList = [
        "Personal",
        "Work",
        "Practice",
        "Hobby"
    ];
    
    // add as a select with add more property feature here.
    return(
        <form>
            <p>Project type:</p>
            <select>
                {projTypeList.map((type, index) => {
                    return  <option key={index} value={type}>{type}</option>
                }).reverse()}
            </select>
        </form>
    )
}