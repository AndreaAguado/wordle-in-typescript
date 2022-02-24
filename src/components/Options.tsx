import styles from "../styles/options.module.scss";

interface OptionProps {
  setOptionsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  colorBlindMode: boolean;
  setColorBlindMode: React.Dispatch<React.SetStateAction<boolean>>;
  accessibilityMode: boolean;
  setAccessibilityMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Options = ({
  setOptionsHidden,
  colorBlindMode,
  setColorBlindMode,
  accessibilityMode,
  setAccessibilityMode,
}: OptionProps) => {
  let lightMode = document.getElementsByClassName("light_mode");

  const handleColorBlindMode = () => {
    if (colorBlindMode) {
      setColorBlindMode(false);
      document.body.classList.remove("color_blind_mode");
    } else {
      setColorBlindMode(true);
      document.body.classList.add("color_blind_mode");
    }
  };

  const handleAccessibilityMode = () => {
    if (accessibilityMode) {
      setAccessibilityMode(false);
      document.body.classList.remove("accessibility_mode");
    } else {
      setAccessibilityMode(true);
      document.body.classList.add("accessibility_mode");
    }
  };
  const handleClose = () => {
    setOptionsHidden(true);
  };
  return (
    <div
      className={lightMode.length > 0 ? styles.light_mode : styles.night_mode}
    >
      <section className={styles.section}>
        <header className={styles.title_container}>
          <h2 className={styles.title}>Settings</h2>
          <button onClick={handleClose} className={styles.close_button}>
            <i className="bi bi-x-lg"></i>
          </button>
        </header>
        <div className={styles.setting_container}>
          {colorBlindMode ? (
            <>
              <p>Deactivate Colorblind Mode</p>
              <button onClick={handleColorBlindMode} className={styles.button}>
                <i className="bx bxs-palette"></i>
              </button>
            </>
          ) : (
            <>
              <p>Activate Colorblind Mode</p>
              <button onClick={handleColorBlindMode} className={styles.button}>
                <i className="bx bx-palette"></i>
              </button>
            </>
          )}
        </div>
        <div className={styles.setting_container}>
          {accessibilityMode ? (
            <>
              <span className={styles.setting_description}>
                <p>Deactivate Accessibility Mode</p>
                <small>Return keys font to original size</small>
              </span>
              <button
                onClick={handleAccessibilityMode}
                className={styles.button}
              >
                <i className="bx bx-font-size"></i>
              </button>
            </>
          ) : (
            <>
              <span>
                <p>Activate Accessibility Mode</p>
                <small>Make keys font bigger</small>
              </span>
              <button
                onClick={handleAccessibilityMode}
                className={styles.button}
              >
                <i className="bx bx-font-size"></i>
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  );
};
export default Options;
