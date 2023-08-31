import { useNavigate } from "react-router-dom";

import Container from "common/Container";
import styles from "./index.module.scss";
import Menu from "./Menu";
import GoBack from "common/GoBack";

const InvoicePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <main className={styles.main}>
        <nav>
          <GoBack onClick={() => navigate(-1)} />
        </nav>
        <Menu />
      </main>
    </Container>
  );
};

export default InvoicePage;
