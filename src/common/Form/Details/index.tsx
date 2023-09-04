import CustomDatePicker from "./CustomDatePicker";
import styles from "./index.module.scss";

const Details = () => {
  return (
    <fieldset className={styles.fieldset}>
      <CustomDatePicker />
    </fieldset>
  );
};

export default Details;
