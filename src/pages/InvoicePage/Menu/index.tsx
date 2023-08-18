import Status from "common/Status";
import styles from "./index.module.scss";

const Menu = () => {
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menu}>
        <div className={styles.menu__status}>
          <span>Status</span>
          <Status status="pending" />
        </div>

        <div className={styles.buttonsWrapper}>
          <div className={styles.menu__buttons}>
            <button
              className={`${styles.menu__button} ${styles["menu__button--edit"]}`}
            >
              Edit
            </button>
            <button
              className={`${styles.menu__button} ${styles["menu__button--delete"]}`}
            >
              Delete
            </button>
            <button
              className={`${styles.menu__button} ${styles["menu__button--mark"]}`}
            >
              Mark as Paid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
