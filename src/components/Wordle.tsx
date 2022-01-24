import RowCompleted from "./RowCompleted";
import RowEmpty from "./RowEmpty";

const Wordle = () => {
    return(
        <div>
            <RowCompleted word="sabio" solution="break"/>
            <RowCompleted word="sabio" solution="break"/>
            <RowCompleted word="sabio" solution="break"/>
            <RowEmpty/>
            <RowEmpty/>
            <RowEmpty/>
        </div>
    )
}
export default Wordle;