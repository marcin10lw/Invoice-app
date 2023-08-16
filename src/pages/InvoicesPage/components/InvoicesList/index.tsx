import { useGetInvoicesQuery } from "store/api/apiSlice";

import InvoiceItem from "./IncoiveItem";
import styles from "./index.module.scss";
import PlaceholderItem from "./PlaceholderItem";

const InvoicesList = () => {
  const { data, isLoading, isSuccess, isError } =
    useGetInvoicesQuery(undefined);
  const placeholderArray = Array.from({ length: 7 }, (_, index) => index + 1);

  return (
    <ul className={styles.invoicesList}>
      {isSuccess &&
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

      {isLoading &&
        placeholderArray.map((item) => <PlaceholderItem key={item} />)}
    </ul>
  );
};

export default InvoicesList;
