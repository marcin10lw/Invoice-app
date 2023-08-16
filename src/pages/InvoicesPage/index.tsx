import { useState, ChangeEvent } from "react";

import { StatusTag } from "types";
import Container from "common/Container";
import InvoicesHeader from "./components/InvoicesHeader";
import InvoicesList from "./components/InvoicesList";
import styles from "./index.module.scss";

const InvoicesPage = () => {
  const [statusTag, setStautsTag] = useState<StatusTag>("total");

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
        <InvoicesHeader setTag={setTag} statusTag={statusTag} />
        <InvoicesList statusTag={statusTag} />
      </main>
    </Container>
  );
};

export default InvoicesPage;
