import styles from "./styles.module.css";

export const Review = ({ text }) => {
  return <div className={styles.item}>{text}</div>;
};
