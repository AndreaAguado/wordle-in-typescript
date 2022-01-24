import RowCompleted from "./RowCompleted";
import RowEmpty from "./RowEmpty";
import RowCurrent from './RowCurrent';

const Wordle = () => {
    return(
        <div>
            <RowCompleted word="sabio" solution="break"/>
            <RowCompleted word="sabio" solution="break"/>
            <RowCurrent word="sab"/>
            <RowEmpty/>
            <RowEmpty/>
            <RowEmpty/>
        </div>
    )
}
export default Wordle;