import styles from "./styles.module.css";
import cn from "classnames";
import { useButtonTheme } from "../../hooks/useButtonTheme";

export const LayoutButton = ({
  className,
  onClick,
  disabled,
  type,
  children,
}) => {
  const circled = useButtonTheme();
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(className, styles.layout, {
        [styles.circled]: circled,
        [styles.default]: !circled,
      })}
    >
      {children}
    </button>
  );
};
