import { Control, Controller } from "react-hook-form";
import dayjs from "dayjs";

import { Invoice } from "types";
import DatePicker from "./DatePicker";
import PaymentTerms from "./PaymentTerms";
import styles from "./index.module.scss";

type DetailsProps = {
  control: Control<Invoice, any>;
};

const Details = ({ control }: DetailsProps) => {
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
        <PaymentTerms />
      </div>

      <div className="inputGroup">
        <label htmlFor="description" className="label">
          Project Description
        </label>
        <input id="description" name="description" className="input" />
      </div>
    </fieldset>
  );
};

export default Details;
