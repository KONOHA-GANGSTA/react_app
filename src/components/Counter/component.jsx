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
      <button
        className={styles.button}
        type="button"
        onClick={decrement}
        disabled={number <= min}
      >
        -
      </button>
      <div className={styles.value}>{number}</div>
      <button
        className={styles.button}
        type="button"
        onClick={increment}
        disabled={number >= max}
      >
        +
      </button>
    </div>
  );
};
