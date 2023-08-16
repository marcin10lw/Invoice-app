import { useState } from "react";

import { StatusTag } from "types";
import { ReactComponent as Arrow } from "assets/icon-arrow-down.svg";
import styles from "./index.module.scss";

type FilterInvoicesProps = {
  setTag: (event: React.ChangeEvent<HTMLInputElement>) => void;
  statusTag: StatusTag;
};

const FilterInvoices = ({ setTag, statusTag }: FilterInvoicesProps) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

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
              onChange={setTag}
              checked={statusTag === "draft"}
            />
            <label htmlFor="draft">Draft</label>
          </li>
          <li className={styles.dropdown__inputGroup}>
            <input
              type="checkbox"
              id="pending"
              value="pending"
              onChange={setTag}
              checked={statusTag === "pending"}
            />
            <label htmlFor="pending">Pending</label>
          </li>
          <li className={styles.dropdown__inputGroup}>
            <input
              type="checkbox"
              id="paid"
              value="paid"
              onChange={setTag}
              checked={statusTag === "paid"}
            />
            <label htmlFor="paid">Paid</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterInvoices;
