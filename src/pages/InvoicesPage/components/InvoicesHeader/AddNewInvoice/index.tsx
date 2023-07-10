import { ReactComponent as Plus } from "assets/icon-plus.svg";
import styles from "./index.module.scss";

const AddNewInvoice = () => {
  return (
    <button className={styles.button}>
      <div className={styles.button__plus}>
        <Plus />
      </div>
      <div>
        New <span className="mobileHidden">Invoice</span>
      </div>
    </button>
  );
};

export default AddNewInvoice;
