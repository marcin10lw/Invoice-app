import { ReactComponent as Plus } from "assets/icon-plus.svg";
import styles from "./index.module.scss";
import { useContext } from "react";
import { FormContext } from "context/FormContext";

const AddNewInvoice = () => {
  const { setIsFormOpen, setFormType } = useContext(FormContext);

  const onButtonClick = () => {
    setIsFormOpen(true);
    setFormType("create");
  };

  return (
    <button className={styles.button} onClick={onButtonClick}>
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
