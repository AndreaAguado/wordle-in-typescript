import styles from '../styles/row.module.scss';
import Box from './Box';

interface RowCurrentProps{
    word: string;
}

const RowCurrent = ({ word } : RowCurrentProps) => {
    return(
        <div className={styles.row}>
            {word.split('').map((letter, i)=>{
                return (
                    <Box key={i} value={letter} status="edit"/>
                )
            })}
             {Array.from(Array(5- word.length)).map((letter, i)=>{
                return (
                    <Box key={i} value="" status="edit"/>
                )
            })}
        </div>
    )
}
export default RowCurrent;