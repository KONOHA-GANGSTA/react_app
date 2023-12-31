import { LayoutButton } from "../LayoutButton/component";
import styles from "./styles.module.css";
import cn from "classnames";

export const Footer = ({ className }) => {
  return (
    <div className={cn(className, styles.layout)}>
      <LayoutButton className={styles.buttons}>Контакты</LayoutButton>
    </div>
  );
};
