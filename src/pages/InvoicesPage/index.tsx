import { useState, ChangeEvent } from "react";

import { useGetInvoicesQuery } from "store/api/apiSlice";
import { StatusTag } from "types";
import { filterInvoices } from "./filterInvoices";
import Container from "common/Container";
import InvoicesHeader from "./components/InvoicesHeader";
import InvoiceItem from "./components/IncoiveItem";
import PlaceholderItem from "./components/PlaceholderItem";
import EmptyView from "./components/EmptyView";
import styles from "./index.module.scss";
import Error from "common/Error";

const InvoicesPage = () => {
  const {
    data: invoices = [],
    isLoading,
    isSuccess,
    isError,
  } = useGetInvoicesQuery(undefined);
  const [statusTag, setStautsTag] = useState<StatusTag>("total");

  const filteredInvoices = filterInvoices(invoices, statusTag);

  const setTag = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as StatusTag;

    setStautsTag((statusTag) => {
      if (statusTag === value) {
        return "total";
      } else {
        return value;
      }
    });
  };

  const placeholderArray = Array.from({ length: 7 }, (_, index) => index + 1);

  console.log(invoices);

  return (
    <Container>
      <main className={styles.main}>
        <InvoicesHeader
          setTag={setTag}
          statusTag={statusTag}
          filteredInvoicesAmount={filteredInvoices.length}
        />
        {isSuccess &&
          (!!invoices.length ? (
            <ul className={styles.invoicesList}>
              {filteredInvoices?.map(
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
            </ul>
          ) : (
            <EmptyView />
          ))}
        {isLoading && (
          <ul className={styles.invoicesList}>
            {placeholderArray.map((item) => (
              <PlaceholderItem key={item} />
            ))}
          </ul>
        )}
        {isError && <Error />}
      </main>
    </Container>
  );
};

export default InvoicesPage;
