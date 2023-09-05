import {
  FieldArrayWithId,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import { Invoice, InvoiceItem } from "types";
import { ReactComponent as DeleteIcon } from "assets/icon-delete.svg";
import styles from "./index.module.scss";

type ItemProps = {
  index: number;
  fields: FieldArrayWithId<Invoice, "items", "id">[];
  register: UseFormRegister<Invoice>;
  setValue: UseFormSetValue<Invoice>;
};

const Item = ({ index, fields, register, setValue }: ItemProps) => {
  return (
    <li className={styles.item}>
      <div className={`inputGroup ${styles["inputGroup--itemName"]}`}>
        <label htmlFor="itemName" className={styles.label}>
          Item Name
        </label>
        <input
          {...register(`items.${index}.name`)}
          id="itemName"
          className={styles.input}
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
          className={styles.input}
        />
      </div>

      <div className={`inputGroup`}>
        <label htmlFor="price" className={styles.label}>
          Price
        </label>
        <input
          {...register(`items.${index}.price`, { min: 0, valueAsNumber: true })}
          id="price"
          type="number"
          min={0}
          className={styles.input}
        />
      </div>

      <div className={styles.total}>
        <div className={`inputGroup`}>
          <div className={styles.label}>Total</div>
          <span className={styles.total__text}>150.00</span>
        </div>

        <button className={styles.total__button}>
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

export default Item;
