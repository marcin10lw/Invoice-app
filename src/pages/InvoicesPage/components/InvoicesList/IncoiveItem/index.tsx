import { Link } from "react-router-dom";

import { Invoice } from "types";
import { ReactComponent as Arrow } from "assets/icon-arrow-right.svg";
import styles from "./index.module.scss";

const InvoiceItem = ({
  id,
  paymentDue,
  clientName,
  total,
  status,
}: Invoice) => {
  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
  }).format(total);

  return (
    <Link to={`/invoices/${id}`} className={styles.invoiceWrapper}>
      <article className={styles.invoice}>
        <div className={styles.invoice__leftContent}>
          <div className={styles.leftContentWrapper}>
            <h2 className={styles.invoice__id}>
              <span>#</span>
              {id}
            </h2>
            <p className={styles.invoice__paymentDue}>Due {paymentDue}</p>
          </div>
          <p className={styles.invoice__clientName}>{clientName}</p>
        </div>
        <div className={styles.invoice__rightContent}>
          <div className={styles.rightContentWrapper}>
            <p className={styles.invoice__total}>{formattedTotal}</p>
            <div className={styles.invoice__status}>
              <p>{status}</p>
            </div>
          </div>

          <Arrow className={styles.invoice__arrow} />
        </div>
      </article>
    </Link>
  );
};

export default InvoiceItem;
