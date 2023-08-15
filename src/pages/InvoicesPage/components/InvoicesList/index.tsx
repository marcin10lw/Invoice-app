import { useQuery } from "@tanstack/react-query";

import { fetchInvoices } from "services/fetchInvoices";
import InvoiceItem from "./IncoiveItem";
import styles from "./index.module.scss";

const InvoicesList = () => {
  const { data } = useQuery(["invoices"], fetchInvoices);

  return (
    <ul className={styles.invoicesList}>
      {data?.map(({ id, clientName, paymentDue, status, total }) => (
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
    </ul>
  );
};

export default InvoicesList;
