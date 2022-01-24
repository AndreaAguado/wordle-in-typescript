import Box from "./Box";

interface rowCompletedProps {
    word: string;
    solution: string;

}
const RowCompleted = ({word, solution} : rowCompletedProps) => {
    return(
        <div>
            {
                Array.from(Array(5)).map((_,i) => {
                    return(
                        <Box key={i} value="a" status="correct"></Box>
                    )                    
                })
            }
        </div>
    )
}
export default RowCompleted;