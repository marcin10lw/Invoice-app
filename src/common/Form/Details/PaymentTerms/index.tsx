import { useState } from "react";

import { termsData } from "./termsData";
import { ReactComponent as ArrowDown } from "assets/icon-arrow-down.svg";
import styles from "./index.module.scss";
import useOutsideClick from "hooks/useOutsideClick";

type PaymentTermsProps = {
  selectedPaymentTerm: number;
  setSelectedPaymentTerm: (...event: any[]) => void;
};

const PaymentTerms = ({
  selectedPaymentTerm,
  setSelectedPaymentTerm,
}: PaymentTermsProps) => {
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
          <div>
            {
              termsData.find(
                (termsData) => termsData.amount === selectedPaymentTerm
              )?.content
            }
          </div>
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
                  <li key={id} className={styles.popper__item}>
                    <button
                      onClick={() => setSelectedPaymentTerm(amount)}
                      className={`${styles.popper__button} ${
                        amount === selectedPaymentTerm
                          ? styles["popper__button--selected"]
                          : ""
                      }`}
                    >
                      {content}
                    </button>
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
