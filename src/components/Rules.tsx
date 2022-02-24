import styles from "../styles/rules.module.scss";

interface RulesProps {
  rulesHidden: boolean;
  setRulesHidden: React.Dispatch<React.SetStateAction<boolean>>;
}
const Rules = ({ rulesHidden, setRulesHidden }: RulesProps) => {
  const handleClose = () => {
    setRulesHidden(true);
  };

  let lightMode = document.getElementsByClassName("light_mode");
  let colorBlindMode = document.getElementsByClassName("color_blind_mode");

  return (
    <>
      {rulesHidden ? null : (
        <div
          className={
            lightMode.length > 0 ? styles.light_mode : styles.night_mode
          }
        >
          <section className={styles.section}>
            <header className={styles.title_container}>
              <h2 className={styles.title}>How to play</h2>
              <button onClick={handleClose} className={styles.close_button}>
                <i className="bi bi-x-lg"></i>
              </button>
            </header>
            <p>Guess the WORDLE in six tries.</p>
            <p>
              Each guess must be a valid five-letter word. Hit the enter button
              to submit.
            </p>
            <p>
              After each guess, the color of the tiles will change to show how
              close your guess was to the word.
            </p>
            <h2>Examples</h2>
            <div className={styles.row}>
              <span
                className={
                  colorBlindMode.length > 0 ? styles.correct_cb : styles.correct
                }
              >
                w
              </span>
              <span className={styles.empty}>e</span>
              <span className={styles.empty}>a</span>
              <span className={styles.empty}>r</span>
              <span className={styles.empty}>y</span>
            </div>
            <p>The letter W is in the word and in the correct spot.</p>
            <div className={styles.row}>
              <span className={styles.empty}>p</span>
              <span
                className={
                  colorBlindMode.length > 0 ? styles.present_cb : styles.present
                }
              >
                i
              </span>
              <span className={styles.empty}>l</span>
              <span className={styles.empty}>l</span>
              <span className={styles.empty}>s</span>
            </div>
            <p>The letter I is in the word but in the wrong spot.</p>
            <div className={styles.row}>
              <span className={styles.empty}>v</span>
              <span className={styles.empty}>a</span>
              <span className={styles.empty}>g</span>
              <span className={styles.absent}>u</span>
              <span className={styles.empty}>e</span>
            </div>
            <p>The letter U is not in the word in any spot.</p>
            <p>A new WORDLE will be available each day!</p>
            <small>
              Recreation of the original{" "}
              <a
                className={styles.copy_link}
                href="https://www.nytimes.com/games/wordle/index.html"
                title="NY Times Wordle page"
                target="_blank"
                rel="noreferrer"
              >
                Wordle
              </a>{" "}
              game by{" "}
              <a
                className={styles.copy_link}
                href="https://www.powerlanguage.co.uk/"
                title="Josh Wardle page"
                target="_blank"
                rel="noreferrer"
              >
                Josh Wardle
              </a>{" "}
            </small>
          </section>
        </div>
      )}
    </>
  );
};
export default Rules;
