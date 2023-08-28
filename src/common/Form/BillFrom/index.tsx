import styles from "./index.module.scss";

const BillFrom = () => {
  return (
    <div>
      <fieldset className={styles.fieldset}>
        <legend className={`legend`}>Bill From</legend>

        <div>
          <div className="inputGroup">
            <label htmlFor="street" className="label">
              Street Address
            </label>
            <input id="street" name="street" className="input" />
          </div>
          <div className={styles.inputsWrapper}>
            <div className="inputGroup">
              <label htmlFor="city" className="label">
                City
              </label>
              <input id="city" name="city" className="input" />
            </div>
            <div className="inputGroup">
              <label htmlFor="postCode" className="label">
                Post Code
              </label>
              <input id="postCode" name="postCode" className="input" />
            </div>
            <div className="inputGroup">
              <label htmlFor="coutry" className="label">
                Country
              </label>
              <input id="country" name="country" className="input" />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default BillFrom;
