import styles from "../styles/header.module.scss";
import { useState } from "react";

interface HeaderProps {
  resultsHidden: boolean;
  setResultsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  rulesHidden: boolean;
  setRulesHidden: React.Dispatch<React.SetStateAction<boolean>>;
  optionsHidden: boolean;
  setOptionsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({
  resultsHidden,
  setResultsHidden,
  rulesHidden,
  setRulesHidden,
  optionsHidden,
  setOptionsHidden,
}: HeaderProps) => {
  const [darkMode, setDarkMode] = useState(true);
  const handleModeChange = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.classList.add("light_mode");
      document.body.classList.remove("dark_mode");
    } else {
      setDarkMode(true);
      document.body.classList.add("dark_mode");
      document.body.classList.remove("light_mode");
    }
  };

  const handleModal = () => {
    if (resultsHidden) {
      setResultsHidden(false);
    }
  };

  const handleRulesModal = () => {
    if (rulesHidden) {
      setRulesHidden(false);
    }
  };

  const handleOptions = () => {
    if (optionsHidden) {
      setOptionsHidden(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.buttons_container}>
        <button
          onClick={handleRulesModal}
          className={styles.button}
          title="How to play?"
        >
          <i
            className="bi bi-patch-question"
            aria-label="question mark icon"
          ></i>
        </button>
      </div>
      <h1 className={styles.header_title}>Wordle</h1>
      <div className={styles.buttons_container}>
        {resultsHidden ? (
          <button
            onClick={handleModal}
            className={styles.button}
            title="See results"
          >
            <i className="bi bi-bar-chart-line" aria-label="chart icon"></i>
          </button>
        ) : (
          <button
            onClick={handleModal}
            className={styles.disabled_button}
            disabled
          >
            <i className="bi bi-bar-chart-line"></i>
          </button>
        )}
        <button onClick={handleOptions} className={styles.button}>
          <i className="bi bi-gear-fill"></i>
        </button>

        <button
          onClick={handleModeChange}
          title={darkMode ? "Change to light mode" : "Change to dark mode"}
          className={styles.button}
        >
          {darkMode ? (
            <i aria-label="sun icon" className="bx bx-sun"></i>
          ) : (
            <i aria-label="moon icon" className="bx bxs-moon"></i>
          )}
        </button>
      </div>
    </header>
  );
};
export default Header;
