import styles from "../styles/header.module.scss";
import { useState } from "react";

interface HeaderProps {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  rulesHidden: boolean;
  setRulesHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({
  hidden,
  setHidden,
  rulesHidden,
  setRulesHidden,
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
    if (hidden) {
      setHidden(false);
    }
  };

  const handleRulesModal = () => {
    if (rulesHidden) {
      setRulesHidden(false);
    }
  };

  return (
    <header className={styles.header}>
      <button
        onClick={handleRulesModal}
        className={styles.rules_button}
        title="How to play?"
      >
        <i className="bi bi-patch-question" aria-label="question mark icon"></i>
      </button>
      <h1 className={styles.header_title}>Wordle</h1>
      <div>
        {hidden ? (
          <button
            onClick={handleModal}
            className={styles.modal_button}
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

        <button
          onClick={handleModeChange}
          title={darkMode ? "Change to light mode" : "Change to dark mode"}
          className={styles.mode_button}
        >
          {/* <i className="bi bi-gear-fill"></i> */}
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
