import { useState, ChangeEvent } from "react";
import { useQuery } from "@tanstack/react-query";

import { StatusTag } from "types";
import { filterInvoices } from "./filterInvoices";
import { getInvoices } from "./getInvoices";
import Container from "common/Container";
import InvoicesHeader from "./components/InvoicesHeader";
import InvoiceItem from "./components/IncoiveItem";
import EmptyView from "./components/EmptyView";
import styles from "./index.module.scss";
import Error from "common/Error";

const InvoicesPage = () => {
  const { data: invoices, status } = useQuery({
    queryFn: getInvoices,
    queryKey: ["invoices"],
  });

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

  return (
    <Container>
      <main className={styles.main}>
        <InvoicesHeader
          setTag={setTag}
          statusTag={statusTag}
          filteredInvoicesAmount={filteredInvoices?.length}
        />
        {status === "success" &&
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

        {status === "error" && <Error />}
      </main>
    </Container>
  );
};

export default InvoicesPage;
