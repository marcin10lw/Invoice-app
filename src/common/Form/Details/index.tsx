import ChooseDate from "./DatePicker";
import styles from "./index.module.scss";

const Details = () => {
  return (
    <fieldset className={styles.fieldset}>
      <ChooseDate />
    </fieldset>
  );
};

export default Details;
