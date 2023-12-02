import styles from "./styles.module.css";
import cn from "classnames";

export const Review = ({ text, className }) => {
  return <div className={cn(styles.item, className)}>{text}</div>;
};
