import styles from "./index.module.scss";

const InvoicesHeader = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.header__heading}>Invoices</h1>
        <p className={styles.header__info}>There are 4 pending invoices</p>
      </div>
    </header>
  );
};

export default InvoicesHeader;
