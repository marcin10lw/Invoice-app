import {
  Control,
  FieldErrors,
  UseFormRegister,
  useFieldArray,
  useWatch,
} from "react-hook-form";

import { Invoice } from "types";
import Item from "./Item";
import styles from "./index.module.scss";

type ItemsProps = {
  control: Control<Invoice, any>;
  register: UseFormRegister<Invoice>;
  errors: FieldErrors<Invoice>;
};

const Items = ({ control, register, errors }: ItemsProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const watchTest = useWatch({
    control,
    name: "items",
  });

  const onAddItem = () => {
    append({
      name: "",
      price: 0,
      quantity: 0,
      total: 0,
    });
  };

  return (
    <section className={styles.items}>
      <h4 className={styles.items__heading}>Item List</h4>

      <div className={styles.items__content}>
        <div className={styles.items__head}>
          <span>Item Name</span>
          <span>Qty.</span>
          <span>Price</span>
          <span>Total</span>
        </div>

        <ul className={styles.items__list}>
          {fields.map((item, index) => {
            const total = watchTest[index]?.price * watchTest[index]?.quantity;

            return (
              <Item
                key={item.id}
                index={index}
                register={register}
                remove={remove}
                total={total}
                errors={errors}
              />
            );
          })}
        </ul>

        <button onClick={onAddItem} className={styles.items__button}>
          + Add New Item
        </button>
      </div>
    </section>
  );
};

export default Items;
