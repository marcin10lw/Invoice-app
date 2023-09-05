import { useState } from "react";

import { termsData } from "./termsData";
import { ReactComponent as ArrowDown } from "assets/icon-arrow-down.svg";
import styles from "./index.module.scss";
import useOutsideClick from "hooks/useOutsideClick";

const PaymentTerms = () => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(() => setIsPopperOpen(false));

  const togglePopperOpen = () => {
    setIsPopperOpen((isPopperOpen) => !isPopperOpen);
  };

  return (
    <div ref={ref} className="inputGroup">
      <div
        onClick={togglePopperOpen}
        className="label"
        aria-labelledby="open field to provide payment terms"
      >
        Payment Terms
      </div>

      <div
        onClick={togglePopperOpen}
        className={`${styles.termPicker} ${
          isPopperOpen ? styles["termPicker--open"] : ""
        }`}
      >
        <div className={styles.termPicker__info}>
          <div>Net 30 Days</div>
          <ArrowDown
            className={` ${
              isPopperOpen ? styles["termPicker__arrow--open"] : ""
            }`}
          />
        </div>

        {isPopperOpen && (
          <div
            className={styles.popper}
            onClick={(event) => event.stopPropagation()}
          >
            <ul>
              {termsData.map(({ id, content, amount }) => {
                return (
                  <li key={id} className={styles.popper__button}>
                    <button>{content}</button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentTerms;
