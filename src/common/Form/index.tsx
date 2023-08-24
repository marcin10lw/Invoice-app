import { useState } from "react";
import BillFrom from "./BillFrom";
import styles from "./index.module.scss";

const Form = () => {
  const [isFormOpen, setIsFormOpen] = useState(true);

  return (
    <>
      <div
        className={`${styles.backdrop} ${
          isFormOpen ? styles["backdrop--open"] : ""
        }`}
      />
      <div
        className={`${styles.formWrapper} ${
          isFormOpen ? styles["formWrapper--open"] : ""
        }`}
      >
        <div className={styles.wapper}>
          <h3>New Invoice</h3>

          <form>
            <BillFrom />
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
