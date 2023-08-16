import { Link } from "react-router-dom";
import format from "date-fns/format";

import { Invoice } from "types";
import { ReactComponent as Arrow } from "assets/icon-arrow-right.svg";
import styles from "./index.module.scss";
import { getFormattedTotal, getStatusClassName } from "./utils";

const InvoiceItem = ({
  id,
  paymentDue,
  clientName,
  total,
  status,
}: Invoice) => {
  const formattedPaymentDue = format(new Date(paymentDue), "dd LLL yyyy");

  return (
    <Link to={`/invoices/${id}`} className={styles.invoiceWrapper}>
      <article className={styles.invoice}>
        <div className={styles.invoice__leftContent}>
          <div className={styles.leftContentWrapper}>
            <h2 className={styles.invoice__id}>
              <span>#</span>
              {id}
            </h2>
            <p className={styles.invoice__paymentDue}>
              Due {formattedPaymentDue}
            </p>
          </div>
          <p className={styles.invoice__clientName}>{clientName}</p>
        </div>
        <div className={styles.invoice__rightContent}>
          <div className={styles.rightContentWrapper}>
            <p className={styles.invoice__total}>{getFormattedTotal(total)}</p>
            <div
              className={`${styles.invoice__status} ${
                styles[getStatusClassName(status)]
              }`}
            >
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
