import { useGetInvoicesQuery } from "store/api/apiSlice";

import { StatusTag } from "types";
import PlaceholderItem from "./PlaceholderItem";
import InvoiceItem from "./IncoiveItem";
import styles from "./index.module.scss";

const placeholderArray = Array.from({ length: 7 }, (_, index) => index + 1);

type InvoicesListProps = {
  statusTag: StatusTag;
};

const InvoicesList = ({ statusTag }: InvoicesListProps) => {
  const {
    data: invoices,
    isLoading,
    isSuccess,
    isError,
  } = useGetInvoicesQuery(undefined);

  const filteredInvoices = invoices?.filter((invoice) => {
    if (statusTag === "total") {
      return true;
    }

    return invoice.status === statusTag;
  });

  return (
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
  );
};

export default InvoicesList;
