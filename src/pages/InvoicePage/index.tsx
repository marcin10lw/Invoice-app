import { Link, useParams } from "react-router-dom";

import Container from "common/Container";
import styles from "./index.module.scss";

const InvoicePage = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <Container>
      <main className={styles.main}>
        <nav>
          <Link to="/invoices" className={styles.goBack}>
            Go back
          </Link>
        </nav>
      </main>
    </Container>
  );
};

export default InvoicePage;
