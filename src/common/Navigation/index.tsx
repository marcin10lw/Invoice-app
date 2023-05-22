import styles from "./index.module.scss";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/image-avatar.jpg";
import { ReactComponent as Moon } from "../../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../../assets/icon-sun.svg";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Navigation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img
          draggable={false}
          src={logo}
          alt="logo"
          className={styles.logo__image}
        />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.themeWrapper}>
          <input
            type="checkbox"
            id="check"
            checked={theme === "darkMode"}
            onChange={() => toggleTheme()}
          />
          <label htmlFor="check" className={styles.themeToggler}>
            {theme === "darkMode" ? <Sun /> : <Moon />}
          </label>
        </div>

        <div className={styles.avatar}>
          <img src={avatar} alt="user avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
