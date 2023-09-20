import { FieldErrors, UseFormRegister } from "react-hook-form";

import { Invoice } from "types";
import styles from "./index.module.scss";

type BillFromProps = {
  register: UseFormRegister<Invoice>;
  errors: FieldErrors<Invoice>;
};

const BillFrom = ({ register, errors }: BillFromProps) => {
  return (
    <div>
      <fieldset className={styles.fieldset}>
        <legend className={`legend`}>Bill From</legend>

        <div>
          <div className="inputGroup">
            <label htmlFor="fromStreet" className="label">
              Street Address
            </label>
            <input
              {...register("senderAddress.street")}
              id="fromStreet"
              className={`input ${
                errors.senderAddress?.street ? "input--error" : ""
              }`}
            />
          </div>
          <div className={styles.inputsWrapper}>
            <div className="inputGroup">
              <label htmlFor="fromCity" className="label">
                City
              </label>
              <input
                {...register("senderAddress.city")}
                id="fromCity"
                className={`input ${
                  errors.senderAddress?.city ? "input--error" : ""
                }`}
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="fromPostCode" className="label">
                Post Code
              </label>
              <input
                {...register("senderAddress.postCode")}
                id="fromPostCode"
                className={`input ${
                  errors.senderAddress?.postCode ? "input--error" : ""
                }`}
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="fromCoutry" className="label">
                Country
              </label>
              <input
                {...register("senderAddress.country")}
                id="fromCountry"
                className={`input ${
                  errors.senderAddress?.country ? "input--error" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default BillFrom;
