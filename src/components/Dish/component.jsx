import { useState } from "react";
import { Counter } from "../Counter/component";
import styles from "./styles.module.css";

export const Dish = ({ title }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div className={styles.layout}>
      <div>{title}</div>
      <Counter
        number={amount}
        increment={() => setAmount(amount + 1)}
        decrement={() => setAmount(amount - 1)}
        min={0}
        max={5}
        aliginEnd
      />
    </div>
  );
};
