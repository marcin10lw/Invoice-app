import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

import { ReactComponent as Moon } from "../../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../../assets/icon-sun.svg";
import styles from "./index.module.scss";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/image-avatar.jpg";

const Navigation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <img
          draggable={false}
          src={logo}
          alt="logo"
          className={styles.logo__image}
        />
      </Link>

      <div className={styles.wrapper}>
        <div className={styles.themeWrapper}>
          <input
            type="checkbox"
            id="check"
            checked={theme === "dark"}
            onChange={() => toggleTheme()}
          />
          <label htmlFor="check" className={styles.themeToggler}>
            {theme === "dark" ? <Sun /> : <Moon />}
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
