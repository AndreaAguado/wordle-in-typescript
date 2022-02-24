import styles from "../styles/modal.module.scss";
import { GameStatus } from "./types";

interface ModalProps {
  type: "won" | "lost" | "playing";
  completedWords: string[];
  solution: string;
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  gameStatus: GameStatus;
}

interface SquareProps {
  word: string;
  solution: string;
}

const Modal = ({
  type,
  completedWords,
  solution,
  hidden,
  setHidden,
}: ModalProps) => {
  const handleClose = () => {
    setHidden(true);
  };

  const Square = ({ word, solution }: SquareProps) => {
    let colorBlindMode = document.getElementsByClassName("color_blind_mode");
    const checkLetter = (letter: string, pos: number): string => {
      let emojiGrid = "";
      if (solution.includes(letter)) {
        if (solution[pos] === letter) {
          if (colorBlindMode.length > 0) {
            emojiGrid += "🟧";
          } else {
            emojiGrid += "🟩";
          }
        } else {
          if (colorBlindMode.length > 0) {
            emojiGrid += "🟦";
          } else {
            emojiGrid += "🟨";
          }
        }
      } else {
        emojiGrid += "⬛";
      }
      return emojiGrid;
    };
    return (
      <p className={styles.puzzleWord}>
        {word.split("").map((letter, i) => checkLetter(letter, i))}
      </p>
    );
  };
  return (
    <>
      {hidden ? null : (
        <div className={styles.modalViewContainer}>
          <div className={styles.modalContainer}>
            <div className={styles.button_container}>
              <button onClick={handleClose} className={styles.close_button}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            {type === "playing" ? (
              <p>Your result will appear here after you finish the game</p>
            ) : (
              <>
                <h2>
                  {type === "won" ? "Congrats, you won! 🥳" : "You lost 🥺"}
                </h2>
                <p className={styles.solution}>
                  {`The solution was: ${solution}`}
                </p>
                <p className={styles.puzzle}>
                  {completedWords.map((word, i) => (
                    <Square key={i} word={word} solution={solution} />
                  ))}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
