import { useState, ChangeEvent } from "react";

import { useGetInvoicesQuery } from "store/api/apiSlice";
import { StatusTag } from "types";
import Container from "common/Container";
import InvoicesHeader from "./components/InvoicesHeader";
import InvoicesList from "./components/InvoicesList";
import styles from "./index.module.scss";
import { filterInvoices } from "./filterInvoices";

const InvoicesPage = () => {
  const {
    data: invoices,
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

  console.log(invoices);

  return (
    <Container>
      <main className={styles.main}>
        <InvoicesHeader
          setTag={setTag}
          statusTag={statusTag}
          filteredInvoicesAmount={filteredInvoices?.length}
        />
        <InvoicesList
          filteredInvoices={filteredInvoices}
          areInvoicesEmpty={!invoices?.length}
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </main>
    </Container>
  );
};

export default InvoicesPage;
