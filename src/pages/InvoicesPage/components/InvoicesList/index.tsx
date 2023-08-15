import { useQuery } from "@tanstack/react-query";

import { fetchInvoices } from "services/fetchInvoices";
import InvoiceItem from "./IncoiveItem";
import styles from "./index.module.scss";
import PlaceholderItem from "./PlaceholderItem";

const InvoicesList = () => {
  const { data, status } = useQuery(["invoices"], fetchInvoices);
  const placeholderArray = Array.from({ length: 7 }, (_, index) => index + 1);

  return (
    <ul className={styles.invoicesList}>
      {status === "success" &&
        data?.map(({ id, clientName, paymentDue, status, total }) => (
          <li key={id}>
            <InvoiceItem
              id={id}
              paymentDue={paymentDue}
              clientName={clientName}
              total={total}
              status={status}
            />
          </li>
        ))}

      {status === "loading" &&
        placeholderArray.map((item) => <PlaceholderItem key={item} />)}
    </ul>
  );
};

export default InvoicesList;
