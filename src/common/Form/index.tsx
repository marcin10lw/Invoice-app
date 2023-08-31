import { useContext } from "react";

import { FormContext } from "context/FormContext";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import styles from "./index.module.scss";
import Details from "./Details";
import GoBack from "common/GoBack";

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
        className={`${styles.menu} ${isFormOpen ? styles["menu--open"] : ""}`}
      >
        <div className={styles.goBackWrapper}>
          <GoBack onClick={() => setIsFormOpen(false)} />
        </div>
        <div className={styles.formWrapper}>
          <h3 className={styles.form__heading}>New Invoice</h3>

          <form className={styles.form}>
            <div className={styles.form__fieldsets}>
              <BillFrom />
              <BillTo />
              <BillTo />
              <Details />
            </div>
          </form>
        </div>

        <div className={styles.buttons}></div>
      </div>
    </>
  );
};

export default Form;
