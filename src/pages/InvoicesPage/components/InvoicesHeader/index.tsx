import { StatusTag } from "types";
import AddNewInvoice from "./AddNewInvoice";
import FilterInvoices from "./FilterInvoices";
import styles from "./index.module.scss";

type FilterInvoicesProps = {
  setTag: (event: React.ChangeEvent<HTMLInputElement>) => void;
  statusTag: StatusTag;
  filteredInvoicesAmount: number | undefined;
};

const InvoicesHeader = ({
  statusTag,
  filteredInvoicesAmount,
  setTag,
}: FilterInvoicesProps) => {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.header__heading}>Invoices</h1>
        {filteredInvoicesAmount && (
          <p className={styles.header__info}>
            <span>There are</span> {filteredInvoicesAmount}{" "}
            <span>{statusTag}</span>{" "}
            {filteredInvoicesAmount === 1 ? "invoice" : "invoices"}
          </p>
        )}
      </div>
      <div className={styles.header__dynamic}>
        <FilterInvoices setTag={setTag} statusTag={statusTag} />
        <AddNewInvoice />
      </div>
    </header>
  );
};

export default InvoicesHeader;
