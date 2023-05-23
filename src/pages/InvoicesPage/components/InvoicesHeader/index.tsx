import AddNewInvoice from "./AddNewInvoice";
import FilterInvoices from "./FilterInvoices";
import styles from "./index.module.scss";

const InvoicesHeader = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.header__heading}>Invoices</h1>
        <p className={styles.header__info}>
          <span>There are</span> 4 <span>pending</span> invoices
        </p>
      </div>
      <div className={styles.header__dynamic}>
        <FilterInvoices />
        <AddNewInvoice />
      </div>
    </header>
  );
};

export default InvoicesHeader;
