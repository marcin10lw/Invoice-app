import { BiSolidError } from "react-icons/bi";

import styles from "./index.module.scss";

const Error = () => {
  return (
    <article className={styles.error}>
      <BiSolidError className={styles.error__icon} />

      <div className={styles.error__info}>
        <h2>Could not get Invoices</h2>
        <p>Please try again later</p>
      </div>
    </article>
  );
};

export default Error;
