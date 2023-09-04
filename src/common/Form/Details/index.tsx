import DatePicker from "./DatePicker";
import styles from "./index.module.scss";

const Details = () => {
  return (
    <fieldset className={styles.fieldset}>
      <DatePicker />
    </fieldset>
  );
};

export default Details;
