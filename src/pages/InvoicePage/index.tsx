import { Link, useParams } from "react-router-dom";

import { useGetInvoicesQuery } from "store/api/apiSlice";
import Container from "common/Container";
import styles from "./index.module.scss";
import Menu from "./Menu";

const InvoicePage = () => {
  const {
    data: invoices = [],
    isLoading,
    isSuccess,
    isError,
  } = useGetInvoicesQuery(undefined);
  const { id } = useParams();

  const invoice = invoices.find((invoice) => invoice.id === id);

  console.log(invoice);

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
