import style from "../styles/keyboard.module.scss";
import { KeyStatus } from "./types";

// import type KeyboardKey  from '../components/Wordle';

// import classNames from 'classnames/bind';

// const classes =  classNames.bind(style);

interface KeyboardKey {
  letterValue: string;
  letterStatus: KeyStatus;
}

interface KeyboardProps {
  keys: string[];
  onKeyPressed: (key: string) => void;
  keysStates: KeyboardKey[];
}

const Keyboard = ({ keys, onKeyPressed, keysStates }: KeyboardProps) => {
  const handleInput = (e: any) => {
    onKeyPressed(e.target.textContent);
  };
  const handleEnter = () => {
    onKeyPressed("ENTER");
  };
  const handleDelete = () => {
    onKeyPressed("BACKSPACE");
  };

  // const KeyStatus = classes({
  //     absent: keysStates.letterStatus === "absent",
  //     present: keysStates.letterStatus === "present",
  //     correct: keysStates.letterStatus === "correct",
  // })
  let colorBlindMode = document.getElementsByClassName("color_blind_mode");
  let accessibilityMode = document.getElementsByClassName("accessibility_mode");

  return (
    <div
      className={
        accessibilityMode.length > 0
          ? `${style.keyboardContainer} ${style.XL_FontSize}`
          : `${style.keyboardContainer} ${style.originalFontSize}`
      }
    >
      {colorBlindMode.length > 0 ? (
        <>
          <div className={style.row}>
            {Array.from(Array(10)).map((_, i) => (
              <button
                key={i}
                className={
                  keysStates[i].letterStatus === "correct"
                    ? style.correct_cb
                    : keysStates[i].letterStatus === "present"
                    ? style.present_cb
                    : keysStates[i].letterStatus === "absent"
                    ? style.absent
                    : style.unknown
                }
                onClick={handleInput}
              >
                {keys[i]}
              </button>
            ))}
          </div>
          <div className={style.row}>
            {Array.from(Array(10)).map((_, i) => (
              <button
                key={i + 10}
                className={
                  keysStates[i + 10].letterStatus === "correct"
                    ? style.correct_cb
                    : keysStates[i + 10].letterStatus === "present"
                    ? style.present_cb
                    : keysStates[i + 10].letterStatus === "absent"
                    ? style.absent
                    : style.unknown
                }
                onClick={handleInput}
              >
                {keys[i + 10]}
              </button>
            ))}
          </div>
          <div className={style.row}>
            <button className={style.enterKey} onClick={handleEnter}>
              ENTER
            </button>
            {Array.from(Array(7)).map((_, i) => (
              <button
                key={i + 20}
                className={
                  keysStates[i + 20].letterStatus === "correct"
                    ? style.correct_cb
                    : keysStates[i + 20].letterStatus === "present"
                    ? style.present_cb
                    : keysStates[i + 20].letterStatus === "absent"
                    ? style.absent
                    : style.unknown
                }
                onClick={handleInput}
              >
                {keys[i + 20]}
              </button>
            ))}
            <button className={style.deleteKey} onClick={handleDelete}>
              {accessibilityMode.length > 0 ? (
                <i className="bi bi-backspace"></i>
              ) : (
                "DELETE"
              )}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={style.row}>
            {Array.from(Array(10)).map((_, i) => (
              <button
                key={i}
                className={
                  keysStates[i].letterStatus === "correct"
                    ? style.correct
                    : keysStates[i].letterStatus === "present"
                    ? style.present
                    : keysStates[i].letterStatus === "absent"
                    ? style.absent
                    : style.unknown
                }
                onClick={handleInput}
              >
                {keys[i]}
              </button>
            ))}
          </div>
          <div className={style.row}>
            {Array.from(Array(10)).map((_, i) => (
              <button
                key={i + 10}
                className={
                  keysStates[i + 10].letterStatus === "correct"
                    ? style.correct
                    : keysStates[i + 10].letterStatus === "present"
                    ? style.present
                    : keysStates[i + 10].letterStatus === "absent"
                    ? style.absent
                    : style.unknown
                }
                onClick={handleInput}
              >
                {keys[i + 10]}
              </button>
            ))}
          </div>
          <div className={style.row}>
            <button className={style.enterKey} onClick={handleEnter}>
              ENTER
            </button>
            {Array.from(Array(7)).map((_, i) => (
              <button
                key={i + 20}
                className={
                  keysStates[i + 20].letterStatus === "correct"
                    ? style.correct
                    : keysStates[i + 20].letterStatus === "present"
                    ? style.present
                    : keysStates[i + 20].letterStatus === "absent"
                    ? style.absent
                    : style.unknown
                }
                onClick={handleInput}
              >
                {keys[i + 20]}
              </button>
            ))}
            <button className={style.deleteKey} onClick={handleDelete}>
              {accessibilityMode.length > 0 ? (
                <i className="bi bi-backspace"></i>
              ) : (
                "DELETE"
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Keyboard;
