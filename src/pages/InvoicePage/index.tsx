import { Link } from "react-router-dom";

import Container from "common/Container";
import styles from "./index.module.scss";
import Menu from "./Menu";

const InvoicePage = () => {
  return (
    <Container>
      <main className={styles.main}>
        <nav>
          <Link to="/invoices" className={styles.goBack}>
            Go back
          </Link>
        </nav>
        <Menu />
      </main>
    </Container>
  );
};

export default InvoicePage;
