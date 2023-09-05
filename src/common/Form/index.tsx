import { useContext } from "react";
import { useForm } from "react-hook-form";

import { defaultValues } from "./defaultValues";
import { FormContext } from "context/FormContext";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import styles from "./index.module.scss";
import Details from "./Details";
import GoBack from "common/GoBack";
import Items from "./Items";

const Form = () => {
  const { isFormOpen, setIsFormOpen } = useContext(FormContext);
  const { control, register, setValue, watch } = useForm({ defaultValues });

  console.log(watch());

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
        <div className={styles.wrapper}>
          <h3 className={styles.form__heading}>New Invoice</h3>

          <form
            className={styles.form}
            onSubmit={(event) => event.preventDefault()}
          >
            <div className={styles.form__fieldsets}>
              <BillFrom register={register} />
              <BillTo register={register} />
              <Details control={control} register={register} />
              <Items
                control={control}
                register={register}
                setValue={setValue}
              />
            </div>
          </form>

          <div className={styles.buttonsWrapper}>
            <div className={styles.buttons}>
              <button
                className={`${styles.button} ${styles["button--discard"]}`}
              >
                Discard
              </button>

              <div className={styles.rightButtons}>
                <button
                  className={`${styles.button} ${styles["button--saveDraft"]}`}
                >
                  Save as Draft
                </button>
                <button
                  className={`${styles.button} ${styles["button--saveSend"]}`}
                >
                  Save & Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
