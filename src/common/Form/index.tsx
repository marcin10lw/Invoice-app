import { useContext } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { defaultValues } from "./defaultValues";
import { FormContext } from "context/FormContext";
import { InvoiceItem } from "types";
import { invoiceSchema } from "models/Invoice";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import styles from "./index.module.scss";
import Details from "./Details";
import GoBack from "common/GoBack";
import Items from "./Items";

const Form = () => {
  const { isFormOpen, setIsFormOpen } = useContext(FormContext);
  const {
    control,
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(invoiceSchema),
  });

  const watchItems = useWatch({
    control,
    name: "items",
  });

  const calculateTotal = (item: InvoiceItem) => {
    return item.price * item.quantity;
  };

  const onFormSubmit = (data: typeof defaultValues) => {
    const itemsWithTotal = watchItems.map((item) => ({
      ...item,
      total: calculateTotal(item),
    }));

    // console.log({ ...data, items: itemsWithTotal });
  };

  console.log(errors);

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
              <Items control={control} register={register} />
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
                  onClick={handleSubmit(onFormSubmit)}
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
