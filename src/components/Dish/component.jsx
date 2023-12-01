import { useState } from "react";
import { Counter } from "../Counter/component";

export const Dish = ({ title }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <div>{title}</div>
      <Counter
        number={amount}
        increment={() => setAmount(amount + 1)}
        decrement={() => setAmount(amount - 1)}
        min={0}
        max={5}
      />
    </div>
  );
};
