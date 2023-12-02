import cn from "classnames";
import styles from "./styles.module.css";
export const Header = ({ className }) => {
  return <div className={cn(className, styles.layout)}>HEADER</div>;
};
