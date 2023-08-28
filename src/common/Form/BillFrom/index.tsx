import styles from "./index.module.scss";

const BillFrom = () => {
  return (
    <div>
      <fieldset className={styles.fieldset}>
        <legend className={`legend`}>Bill From</legend>

        <div>
          <div className="inputGroup">
            <label htmlFor="fromStreet" className="label">
              Street Address
            </label>
            <input id="fromStreet" name="fromStreet" className="input" />
          </div>
          <div className={styles.inputsWrapper}>
            <div className="inputGroup">
              <label htmlFor="fromCity" className="label">
                City
              </label>
              <input id="fromCity" name="fromCity" className="input" />
            </div>
            <div className="inputGroup">
              <label htmlFor="fromPostCode" className="label">
                Post Code
              </label>
              <input id="fromPostCode" name="fromPostCode" className="input" />
            </div>
            <div className="inputGroup">
              <label htmlFor="fromCoutry" className="label">
                Country
              </label>
              <input id="fromCountry" name="fromCountry" className="input" />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default BillFrom;
