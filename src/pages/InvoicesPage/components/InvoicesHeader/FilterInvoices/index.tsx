import { ChangeEvent, useState } from "react";

import { ReactComponent as Arrow } from "assets/icon-arrow-down.svg";
import styles from "./index.module.scss";

const FilterInvoices = () => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [statusTags, setStautsTags] = useState<string[]>([]);

  const setTags = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setStautsTags((statusTags) => {
      if (statusTags.some((tag) => tag === value)) {
        return statusTags.filter((tag) => tag !== value);
      }

      return [...statusTags, value];
    });
  };

  return (
    <div className={styles.dropdown}>
      <button
        onClick={() => setShowFilterMenu((showFilterMenu) => !showFilterMenu)}
        className={styles.dropdown__button}
      >
        <div>
          Filter<span className="mobileHidden"> by status</span>
        </div>
        <Arrow
          className={`${styles.dropdown__icon} ${
            showFilterMenu ? styles["dropdown__icon--open"] : ""
          }`}
        />
      </button>

      <div
        className={`${styles.dropdown__menu} ${
          showFilterMenu ? styles["dropdown__menu--open"] : ""
        }`}
      >
        <ul className={styles.dropdown__list}>
          <li className={styles.dropdown__inputGroup}>
            <input
              type="checkbox"
              id="draft"
              value="draft"
              onChange={setTags}
            />
            <label htmlFor="draft">Draft</label>
          </li>
          <li className={styles.dropdown__inputGroup}>
            <input
              type="checkbox"
              id="pending"
              value="pending"
              onChange={setTags}
            />
            <label htmlFor="pending">Pending</label>
          </li>
          <li className={styles.dropdown__inputGroup}>
            <input type="checkbox" id="paid" value="paid" onChange={setTags} />
            <label htmlFor="paid">Paid</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterInvoices;
