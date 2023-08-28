import styles from "./index.module.scss";

const BillTo = () => {
  return (
    <fieldset className={styles.billTo}>
      <legend className="legend">Bill To</legend>

      <div className={styles.inputs}>
        <div className="inputGroup">
          <label htmlFor="toName" className="label">
            Client's Name
          </label>
          <input id="toName" className="input" />
        </div>

        <div className="inputGroup">
          <label htmlFor="toEmail" className="label">
            Client's Email
          </label>
          <input id="toEmail" className="input" />
        </div>

        <div className="inputGroup">
          <label htmlFor="toAddress" className="label">
            Client's Address
          </label>
          <input id="toAddress" className="input" />
        </div>
        <div className={styles.wrapper}>
          <div className="inputGroup">
            <label htmlFor="toCity" className="label">
              City
            </label>
            <input id="toCity" className="input" />
          </div>

          <div className="inputGroup">
            <label htmlFor="toPostCode" className="label">
              Post Code
            </label>
            <input id="toPostCode" className="input" />
          </div>

          <div className="inputGroup">
            <label htmlFor="toCountry" className="label">
              Country
            </label>
            <input id="toCountry" className="input" />
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default BillTo;
