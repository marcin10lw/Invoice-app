import { InvoiceStatus } from "types";
import styles from "./index.module.scss";

type StatusProps = {
  status: InvoiceStatus;
};

const Status = ({ status }: StatusProps) => {
  const getStatusClassName = (status: InvoiceStatus) => {
    switch (status) {
      case "pending":
        return "status--pending";
      case "draft":
        return "status--draft";
      case "paid":
        return "status--paid";
    }
  };

  return (
    <div className={`${styles.status} ${styles[getStatusClassName(status)]}`}>
      <p>{status}</p>
    </div>
  );
};

export default Status;
