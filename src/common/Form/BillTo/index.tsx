import { FieldErrors, UseFormRegister } from "react-hook-form";

import { Invoice } from "types";
import styles from "./index.module.scss";

type BillToProps = {
  register: UseFormRegister<Invoice>;
  errors: FieldErrors<Invoice>;
};

const BillTo = ({ register, errors }: BillToProps) => {
  return (
    <fieldset className={styles.billTo}>
      <legend className="legend">Bill To</legend>

      <div className={styles.inputs}>
        <div className="inputGroup">
          <label htmlFor="toName" className="label">
            Client's Name
          </label>
          <input
            {...register("clientName")}
            id="toName"
            className={`input ${errors.clientName ? "input--error" : ""}`}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="toEmail" className="label">
            Client's Email
          </label>
          <input
            {...register("clientEmail")}
            id="toEmail"
            className={`input ${errors.clientEmail ? "input--error" : ""}`}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="toAddress" className="label">
            Street Address
          </label>
          <input
            {...register("clientAddress.street")}
            id="toAddress"
            className={`input ${
              errors.clientAddress?.street ? "input--error" : ""
            }`}
          />
        </div>
        <div className={styles.inputsWrapper}>
          <div className="inputGroup">
            <label htmlFor="toCity" className="label">
              City
            </label>
            <input
              {...register("clientAddress.city")}
              id="toCity"
              className={`input ${
                errors.clientAddress?.city ? "input--error" : ""
              }`}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="toPostCode" className="label">
              Post Code
            </label>
            <input
              {...register("clientAddress.postCode")}
              id="toPostCode"
              className={`input ${
                errors.clientAddress?.postCode ? "input--error" : ""
              }`}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="toCountry" className="label">
              Country
            </label>
            <input
              {...register("clientAddress.country")}
              id="toCountry"
              className={`input ${
                errors.clientAddress?.country ? "input--error" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default BillTo;
