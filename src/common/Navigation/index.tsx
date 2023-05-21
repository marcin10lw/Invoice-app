import styles from "./index.module.scss";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/image-avatar.jpg";
import { ReactComponent as Moon } from "../../assets/icon-moon.svg";

const Navigation = () => {
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

      <div>
        <div className={styles.themeWrapper}>
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <Moon />
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
