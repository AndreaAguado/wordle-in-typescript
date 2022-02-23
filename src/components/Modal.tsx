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
    const checkLetter = (letter: string, pos: number): string => {
      if (solution.includes(letter)) {
        if (solution[pos] === letter) {
          return "🟩";
        } else {
          return "🟨";
        }
      } else {
        return "⬛";
      }
    };
    return (
      <div className={styles.puzzleWord}>
        {word.split("").map((letter, i) => (
          <div key={i}>{checkLetter(letter, i)}</div>
        ))}
      </div>
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
                <div className={styles.puzzle}>
                  {completedWords.map((word, i) => (
                    <Square key={i} word={word} solution={solution} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
