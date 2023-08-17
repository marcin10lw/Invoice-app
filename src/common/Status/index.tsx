import { InvoiceStatus } from "types";
import styles from "./index.module.scss";

type StatusProps = {
  status: InvoiceStatus;
};

const Status = ({ status }: StatusProps) => {
  const getStatusClassName = (status: InvoiceStatus) => {
    switch (status) {
      case "pending":
        return "invoice__status--pending";
      case "draft":
        return "invoice__status--draft";
      case "paid":
        return "invoice__status--paid";
    }
  };

  return (
    <div
      className={`${styles.invoice__status} ${
        styles[getStatusClassName(status)]
      }`}
    >
      <p>{status}</p>
    </div>
  );
};

export default Status;
