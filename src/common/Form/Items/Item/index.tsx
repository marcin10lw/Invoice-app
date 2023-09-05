import { ReactComponent as DeleteIcon } from "assets/icon-delete.svg";
import styles from "./index.module.scss";

const Item = () => {
  return (
    <li className={styles.item}>
      <div className={`inputGroup ${styles["inputGroup--itemName"]}`}>
        <label htmlFor="itemName" className={styles.label}>
          Item Name
        </label>
        <input id="itemName" className={styles.input} />
      </div>
      <div className={`inputGroup ${styles["inputGroup--quantity"]}`}>
        <label htmlFor="quantity" className={styles.label}>
          Qty.
        </label>
        <input id="quantity" className={styles.input} />
      </div>
      <div className={`inputGroup`}>
        <label htmlFor="price" className={styles.label}>
          Price
        </label>
        <input id="price" className={styles.input} />
      </div>
      <div className={styles.total}>
        <div className={`inputGroup`}>
          <div className={styles.label}>Total</div>
          <span className={styles.total__text}>156.00</span>
        </div>

        <button className={styles.total__button}>
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

export default Item;
