import { Link } from "react-router-dom";

import { getFormattedPaymentDue } from "utils/getFormattedPaymentDue";
import { InvoiceStatus } from "types";
import { getFormattedAmount } from "utils/getFormattedAmount";
import { ReactComponent as Arrow } from "assets/icon-arrow-right.svg";
import Status from "common/Status";
import styles from "./index.module.scss";

type InvoiceItemProps = {
  id: string;
  paymentDue: string;
  clientName: string;
  total: number;
  status: InvoiceStatus;
};

const InvoiceItem = ({
  id,
  paymentDue,
  clientName,
  total,
  status,
}: InvoiceItemProps) => {
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
              Due {getFormattedPaymentDue(paymentDue)}
            </p>
          </div>
          <p className={styles.invoice__clientName}>{clientName}</p>
        </div>
        <div className={styles.invoice__rightContent}>
          <div className={styles.rightContentWrapper}>
            <p className={styles.invoice__total}>{getFormattedAmount(total)}</p>
            <div className={styles.invoice__status}>
              <Status status={status} />
            </div>
          </div>

          <Arrow className={styles.invoice__arrow} />
        </div>
      </article>
    </Link>
  );
};

export default InvoiceItem;
