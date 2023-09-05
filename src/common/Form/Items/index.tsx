import Item from "./Item";
import styles from "./index.module.scss";

const Items = () => {
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

        {/* <Item /> */}
      </div>
    </section>
  );
};

export default Items;
