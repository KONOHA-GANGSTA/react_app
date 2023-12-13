import { useState } from "react";
import { Counter } from "../Counter/component";
import styles from "./styles.module.css";
import cn from "classnames";

export const Dish = ({ name, className }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div className={cn(styles.layout, className)}>
      <div>{name}</div>
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
