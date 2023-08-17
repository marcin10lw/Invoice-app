import emptyImage from "assets/illustration-empty.svg";
import styles from "./index.module.scss";

const EmptyView = () => {
  return (
    <article className={styles.empty}>
      <img src={emptyImage} alt="" />

      <div className={styles.empty__info}>
        <h2>There is nothing here</h2>
        <p>
          Create an invoice by clicking the New Invoice button and get started
        </p>
      </div>
    </article>
  );
};

export default EmptyView;
