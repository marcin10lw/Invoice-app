import Container from "../../common/Container";
import InvoicesHeader from "./components/InvoicesHeader";
import styles from "./index.module.scss";

const InvoicesPage = () => {
  return (
    <Container>
      <main className={styles.main}>
        <InvoicesHeader />
      </main>
    </Container>
  );
};

export default InvoicesPage;
