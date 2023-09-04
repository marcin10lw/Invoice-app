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
    </fieldset>
  );
};

export default Details;
