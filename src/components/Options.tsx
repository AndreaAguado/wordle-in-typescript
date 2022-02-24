import styles from "../styles/options.module.scss";

interface OptionProps {
  optionsHidden: boolean;
  setOptionsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  colorBlindMode: boolean;
  setColorBlindMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Options = ({
  optionsHidden,
  setOptionsHidden,
  colorBlindMode,
  setColorBlindMode,
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
  const handleClose = () => {
    setOptionsHidden(true);
  };
  return (
    <div
      className={lightMode.length > 0 ? styles.light_mode : styles.night_mode}
    >
      <section className={styles.section}>
        <button onClick={handleClose} className={styles.close_button}>
          <i className="bi bi-x-lg"></i>
        </button>
        <div>
          {colorBlindMode ? (
            <button onClick={handleColorBlindMode}>
              Deactivate Colorblind Mode
              <i className="bx bxs-palette"></i>
            </button>
          ) : (
            <button onClick={handleColorBlindMode}>
              Activate Colorblind Mode
              <i className="bx bx-palette"></i>
            </button>
          )}
        </div>
      </section>
    </div>
  );
};
export default Options;
