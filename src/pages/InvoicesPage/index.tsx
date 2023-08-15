import Container from "common/Container";
import InvoicesHeader from "./components/InvoicesHeader";
import styles from "./index.module.scss";
import InvoicesList from "./components/InvoicesList";

const InvoicesPage = () => {
  return (
    <Container>
      <main className={styles.main}>
        <InvoicesHeader />
        <InvoicesList />
      </main>
    </Container>
  );
};

export default InvoicesPage;
