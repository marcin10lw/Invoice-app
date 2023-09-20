import { UseFormHandleSubmit } from "react-hook-form";

import { Invoice } from "types";
import styles from "./index.module.scss";

type ButtonsProps = {
  handleSubmit: UseFormHandleSubmit<Invoice, undefined>;
  onFormSubmit: (data: Invoice) => void;
};

const Buttons = ({ handleSubmit, onFormSubmit }: ButtonsProps) => {
  return (
    <div className={styles.buttonsWrapper}>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles["button--discard"]}`}>
          Discard
        </button>

        <div className={styles.rightButtons}>
          <button
            className={`${styles.button} ${styles["button--saveDraft"]}`}
            onClick={handleSubmit(onFormSubmit)}
          >
            Save as Draft
          </button>
          <button className={`${styles.button} ${styles["button--saveSend"]}`}>
            Save & Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Buttons;
