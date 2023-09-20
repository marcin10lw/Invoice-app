import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import { Invoice } from "types";
import DatePicker from "./DatePicker";
import PaymentTerms from "./PaymentTerms";
import styles from "./index.module.scss";

type DetailsProps = {
  control: Control<Invoice, any>;
  register: UseFormRegister<Invoice>;
  errors: FieldErrors<Invoice>;
};

const Details = ({ control, register, errors }: DetailsProps) => {
  return (
    <fieldset className={styles.fieldset}>
      <div className={styles.dateFields}>
        <Controller
          name="paymentDue"
          control={control}
          render={({ field }) => (
            <DatePicker
              selectedDate={field.value}
              setSelectedDate={field.onChange}
            />
          )}
        />
        <Controller
          name="paymentTerms"
          control={control}
          render={({ field }) => (
            <PaymentTerms
              selectedPaymentTerm={field.value}
              setSelectedPaymentTerm={field.onChange}
            />
          )}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="description" className="label">
          Project Description
        </label>
        <input
          {...register("description")}
          id="description"
          className={`input ${errors.description ? "input--error" : ""}`}
        />
      </div>
    </fieldset>
  );
};

export default Details;
