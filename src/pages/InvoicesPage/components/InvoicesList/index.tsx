import { Invoice } from "types";
import PlaceholderItem from "./PlaceholderItem";
import InvoiceItem from "./IncoiveItem";
import styles from "./index.module.scss";

const placeholderArray = Array.from({ length: 7 }, (_, index) => index + 1);

type InvoicesListProps = {
  filteredInvoices: Invoice[] | undefined;
  areInvoicesEmpty: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};

const InvoicesList = ({
  filteredInvoices,
  areInvoicesEmpty,
  isError,
  isLoading,
  isSuccess,
}: InvoicesListProps) => {
  return (
    <>
      <ul className={styles.invoicesList}>
        {isSuccess &&
          filteredInvoices?.map(
            ({ id, clientName, paymentDue, status, total }) => (
              <li key={id}>
                <InvoiceItem
                  id={id}
                  paymentDue={paymentDue}
                  clientName={clientName}
                  total={total}
                  status={status}
                />
              </li>
            )
          )}

        {isLoading &&
          placeholderArray.map((item) => <PlaceholderItem key={item} />)}
      </ul>
    </>
  );
};

export default InvoicesList;