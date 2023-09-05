import { ReactComponent as DeleteIcon } from "assets/icon-delete.svg";
import styles from "./index.module.scss";

const Item = () => {
  return (
    <div className={styles.item}>
      <div>
        <label htmlFor="itemName">Item Name</label>
        <input id="itemName" />
      </div>

      <div>
        <div>
          <label htmlFor="quantity">Qty.</label>
          <input id="quantity" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input id="price" />
        </div>
        <div>
          <div>Total</div>
          <span>156.00</span>
        </div>
        <button>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default Item;
