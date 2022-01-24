import Box from "./Box";
import styles from "../styles/row.module.scss";

const RowEmpty = () => {
    return(
       <div className={styles.row}>
           {Array.from(Array(5)).map((_,i)=>{
               return(
                   <Box key={i} value="" status="empty"></Box>
               ) 
           })}
       </div> 
    )
}
export default RowEmpty;