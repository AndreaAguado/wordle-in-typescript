import { BoxStatus } from "./types";

import styles from "../styles/box.module.scss";
import classNames from "classnames/bind";

const classes = classNames.bind(styles);

interface BoxProps {
  value: string;
  status: BoxStatus;
}
const Box = ({ value, status }: BoxProps) => {
  let colorBlindMode = document.getElementsByClassName("color_blind_mode");
  let boxStatus;
  if (colorBlindMode.length > 0) {
    boxStatus = classes({
      absent: status === "absent",
      present_cb: status === "present",
      correct_cb: status === "correct",
      empty: status === "empty",
      edit: status === "edit",
    });
  } else {
    boxStatus = classes({
      absent: status === "absent",
      present: status === "present",
      correct: status === "correct",
      empty: status === "empty",
      edit: status === "edit",
    });
  }

  return <div className={boxStatus}>{value}</div>;
};
export default Box;
