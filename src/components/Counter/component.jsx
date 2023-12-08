import { LayoutButton } from "../LayoutButton/component";
import styles from "./styles.module.css";
import cn from "classnames";

export const Counter = ({
  number,
  increment,
  decrement,
  min,
  max,
  aliginEnd,
  className,
}) => {
  return (
    <div
      className={cn(styles.layout, className, { [styles.rowEnd]: aliginEnd })}
    >
      <LayoutButton
        className={styles.button}
        type="button"
        onClick={decrement}
        disabled={number <= min}
      >
        -
      </LayoutButton>
      <div className={styles.value}>{number}</div>
      <LayoutButton
        className={styles.button}
        type="button"
        onClick={increment}
        disabled={number >= max}
      >
        +
      </LayoutButton>
    </div>
  );
};
