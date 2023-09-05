import DatePicker from "./DatePicker";
import PaymentTerms from "./PaymentTerms";
import styles from "./index.module.scss";

const Details = () => {
  return (
    <fieldset className={styles.fieldset}>
      <div className={styles.dateFields}>
        <DatePicker />
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
