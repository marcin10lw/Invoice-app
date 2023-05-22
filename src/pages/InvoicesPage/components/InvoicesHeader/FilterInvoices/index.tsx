import { useState } from "react";
import { ReactComponent as Arrow } from "../../../../../assets/icon-arrow-down.svg";
import styles from "./index.module.scss";

const FilterInvoices = () => {
  const [showField, setShowField] = useState(false);

  return (
    <div className={styles.filter}>
      <button
        onClick={() => setShowField((showField) => !showField)}
        className={styles.filter__button}
      >
        Filter by status
        <Arrow />
      </button>

      <div className={styles.fieldWrapper}>
        <div className={styles.filter__field}>
          <div className={styles.filter__inputGroup}>
            <input type="checkbox" id="draft" />
            <label htmlFor="draft">Draft</label>
          </div>
          <div className={styles.filter__inputGroup}>
            <input type="checkbox" id="pending" />
            <label htmlFor="pending">Pending</label>
          </div>
          <div className={styles.filter__inputGroup}>
            <input type="checkbox" id="paid" />
            <label htmlFor="paid">Paid</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterInvoices;
