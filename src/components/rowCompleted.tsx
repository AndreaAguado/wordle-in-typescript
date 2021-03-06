import Box from "./Box";
import { BoxStatus } from './types';
import styles from '../styles/row.module.scss';

interface rowCompletedProps {
    word: string;
    solution: string;

}
const RowCompleted = ({word, solution} : rowCompletedProps) => {

    function checkLetter(letter: string, pos: number): BoxStatus {
        if (solution.includes(letter)) {
          if (solution[pos] === letter) {
            return "correct";
          } else {
            return "present";
          }
        } else {
          return "absent";
        }
      }

    return(
        <div className={styles.row}>
            {
                Array.from(Array(5)).map((_,i) => {
                    return(
                        <Box key={i} value={word[i]} status={checkLetter(word[i],i)}/>
                    )                    
                })
            }
        </div>
    )
}
export default RowCompleted;