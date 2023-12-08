import { useState } from "react";
import { Counter } from "../Counter/component";
import styles from "./styles.module.css";
import cn from "classnames";
import { useSelector } from "react-redux";
import { selectDishNameById } from "../../redux/features/entities/dishes/selectors";

export const Dish = ({ id, className }) => {
  const [amount, setAmount] = useState(0);
  const name = useSelector((state) => selectDishNameById(state, id));
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
