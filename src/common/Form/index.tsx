import { useContext } from "react";

import { FormContext } from "context/FormContext";
import BillFrom from "./BillFrom";
import styles from "./index.module.scss";

const Form = () => {
  const { isFormOpen, setIsFormOpen } = useContext(FormContext);

  return (
    <>
      <div
        className={`${styles.backdrop} ${
          isFormOpen ? styles["backdrop--open"] : ""
        }`}
        onClick={() => setIsFormOpen(false)}
      />
      <div
        className={`${styles.formWrapper} ${
          isFormOpen ? styles["formWrapper--open"] : ""
        }`}
      >
        <div className={styles.wapper}>
          <h3 className={styles.form__heading}>New Invoice</h3>

          <form>
            <BillFrom />
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
