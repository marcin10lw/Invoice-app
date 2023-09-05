import {
  Control,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  useFieldArray,
} from "react-hook-form";

import { Invoice } from "types";
import Item from "./Item";
import styles from "./index.module.scss";

type ItemsProps = {
  control: Control<Invoice, any>;
  register: UseFormRegister<Invoice>;
  setValue: UseFormSetValue<Invoice>;
};

const Items = ({ control, register, setValue }: ItemsProps) => {
  const { fields, append, remove } = useFieldArray({
    control: control,
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
          {fields.map(({ id }, index) => (
            <Item
              key={id}
              index={index}
              register={register}
              setValue={setValue}
              fields={fields}
              remove={remove}
            />
          ))}
        </ul>

        <button onClick={onAddItem} className={styles.items__button}>
          + Add New Item
        </button>
      </div>
    </section>
  );
};

export default Items;
