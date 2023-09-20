import { useContext } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { calculateTotal } from "utils/calculateTotal";
import { defaultValues } from "./defaultValues";
import { FormContext } from "context/FormContext";
import { Invoice } from "types";
import { invoiceSchema } from "models/Invoice";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import Details from "./Details";
import GoBack from "common/GoBack";
import Items from "./Items";
import styles from "./index.module.scss";
import Buttons from "./Buttons";

const Form = () => {
  const { isFormOpen, closeFormMenu } = useContext(FormContext);
  const {
    control,
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    // resolver: zodResolver(invoiceSchema),
  });

  const watchItems = useWatch({
    control,
    name: "items",
  });

  const onFormSubmit = (data: Invoice) => {
    const itemsWithTotal = watchItems.map((item) => ({
      ...item,
      total: item.price * item.quantity,
    }));

    const newFormData: Invoice = {
      ...data,
      items: itemsWithTotal,
      total: calculateTotal(itemsWithTotal, "total"),
    };

    console.log(newFormData);
  };

  return (
    <>
      <div
        className={`${styles.backdrop} ${
          isFormOpen ? styles["backdrop--open"] : ""
        }`}
        onClick={closeFormMenu}
      />
      <div
        className={`${styles.menu} ${isFormOpen ? styles["menu--open"] : ""}`}
      >
        <div className={styles.goBackWrapper}>
          <GoBack onClick={closeFormMenu} />
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

          <Buttons handleSubmit={handleSubmit} onFormSubmit={onFormSubmit} />
        </div>
      </div>
    </>
  );
};

export default Form;
