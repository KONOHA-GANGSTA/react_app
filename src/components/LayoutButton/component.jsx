import styles from "./styles.module.css";
import cn from "classnames";
import { useControls } from "../../hooks/useControlsContext";

export const LayoutButton = ({
  className,
  onClick,
  disabled,
  type,
  children,
}) => {
  const { square } = useControls();
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(className, styles.layout, {
        [styles.circled]: !square,
        [styles.default]: square,
      })}
    >
      {children}
    </button>
  );
};
