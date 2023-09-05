import { UseFormRegister } from "react-hook-form";

import { Invoice } from "types";
import styles from "./index.module.scss";

type BillToProps = {
  register: UseFormRegister<Invoice>;
};

const BillTo = ({ register }: BillToProps) => {
  return (
    <fieldset className={styles.billTo}>
      <legend className="legend">Bill To</legend>

      <div className={styles.inputs}>
        <div className="inputGroup">
          <label htmlFor="toName" className="label">
            Client's Name
          </label>
          <input {...register("clientName")} id="toName" className="input" />
        </div>

        <div className="inputGroup">
          <label htmlFor="toEmail" className="label">
            Client's Email
          </label>
          <input {...register("clientEmail")} id="toEmail" className="input" />
        </div>

        <div className="inputGroup">
          <label htmlFor="toAddress" className="label">
            Street Address
          </label>
          <input
            {...register("clientAddress.street")}
            id="toAddress"
            className="input"
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
              className="input"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="toPostCode" className="label">
              Post Code
            </label>
            <input
              {...register("clientAddress.postCode")}
              id="toPostCode"
              className="input"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="toCountry" className="label">
              Country
            </label>
            <input
              {...register("clientAddress.country")}
              id="toCountry"
              className="input"
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default BillTo;
