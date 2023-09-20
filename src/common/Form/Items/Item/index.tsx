import {
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";

import { Invoice } from "types";
import { ReactComponent as DeleteIcon } from "assets/icon-delete.svg";
import styles from "./index.module.scss";

type ItemProps = {
  index: number;
  total: number;
  errors: FieldErrors<Invoice>;
  register: UseFormRegister<Invoice>;
  remove: UseFieldArrayRemove;
};

const Item = ({ index, total, register, remove, errors }: ItemProps) => {
  const itemsError = errors.items && errors.items[index];

  return (
    <li className={styles.item}>
      <div className={`inputGroup ${styles["inputGroup--itemName"]}`}>
        <label htmlFor="itemName" className={styles.label}>
          Item Name
        </label>
        <input
          {...register(`items.${index}.name`)}
          id="itemName"
          className={`${styles.input} ${
            itemsError?.name ? "input--error" : ""
          }`}
        />
      </div>

      <div className={`inputGroup ${styles["inputGroup--quantity"]}`}>
        <label htmlFor="quantity" className={styles.label}>
          Qty.
        </label>
        <input
          {...register(`items.${index}.quantity`, {
            min: 0,
            valueAsNumber: true,
          })}
          id="quantity"
          type="number"
          min={0}
          className={`${styles.input} ${
            itemsError?.quantity ? "input--error" : ""
          }`}
        />
      </div>

      <div className={`inputGroup`}>
        <label htmlFor="price" className={styles.label}>
          Price
        </label>
        <input
          {...register(`items.${index}.price`, {
            min: 0,
            valueAsNumber: true,
          })}
          id="price"
          type="number"
          min={0}
          className={`${styles.input} ${
            itemsError?.price ? "input--error" : ""
          }`}
        />
      </div>

      <div className={styles.total}>
        <div className={`inputGroup`}>
          <div className={styles.label}>Total</div>
          <span className={styles.total__text}>
            {total.toString() === "NaN" ? 0 : total.toString()}
          </span>
        </div>

        <button onClick={() => remove(index)} className={styles.total__button}>
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

export default Item;
