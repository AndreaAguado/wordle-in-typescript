import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Wordle</h1>
      <div>
        <button className={styles.options}>
          <i className="bi bi-gear-fill"></i>
        </button>
      </div>
    </header>
  );
};
export default Header;
