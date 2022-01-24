import { BoxStatus } from "./types";

import styles from '../styles/box.module.scss';
import classNames from 'classnames/bind';

const classes =  classNames.bind(styles);

interface BoxProps {
    value: string,
    status: BoxStatus
}
const Box = ({value, status} : BoxProps) => {
    const boxStatus = classes({
        absent: status === "absent",
        present: status === "present",
        correct: status === "correct",
        empty: status === "empty",
        edit: status === "edit",
    })

    return(
        <div className={boxStatus}>{value}</div>
    )
}
export default Box;