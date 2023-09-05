import { UseFormRegister } from "react-hook-form";

import { Invoice } from "types";
import styles from "./index.module.scss";

type BillFromProps = {
  register: UseFormRegister<Invoice>;
};

const BillFrom = ({ register }: BillFromProps) => {
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
              className="input"
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
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="fromPostCode" className="label">
                Post Code
              </label>
              <input
                {...register("senderAddress.postCode")}
                id="fromPostCode"
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="fromCoutry" className="label">
                Country
              </label>
              <input
                {...register("senderAddress.country")}
                id="fromCountry"
                className="input"
              />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default BillFrom;
