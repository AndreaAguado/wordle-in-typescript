import styles from "../styles/header.module.scss";
import { useState } from "react";

const Header = () => {
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

  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Wordle</h1>
      <div>
        <button
          onClick={handleModeChange}
          title={darkMode ? "Change to light mode" : "Change to dark mode"}
          className={styles.options}
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
