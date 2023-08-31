import styles from "./index.module.scss";

type GoBackTypes = {
  onClick: () => void;
};

const GoBack = ({ onClick }: GoBackTypes) => {
  return (
    <button className={styles.goBack} onClick={onClick}>
      Go Back
    </button>
  );
};

export default GoBack;
