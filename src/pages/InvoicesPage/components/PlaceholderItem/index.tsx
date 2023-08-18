import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { ThemeContext } from "context/ThemeContext";
import styles from "./index.module.scss";

const PlaceholderItem = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.skeletonWrapper}>
      <Skeleton
        baseColor={theme === "dark" ? "#1E2139" : ""}
        highlightColor={theme === "dark" ? "#303452" : ""}
        height={"100%"}
      />
    </div>
  );
};

export default PlaceholderItem;
