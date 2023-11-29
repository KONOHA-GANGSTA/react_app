import { Dish } from "../Dish/component";
import styles from "./styles.module.css";
import cn from "classnames";

export const Menu = ({ dishes }) => {
  return (
    <div>
      <h2 className={cn(styles.item, styles.header)}>Меню</h2>
      <ul>
        {dishes.map(({ name }) => (
          <li className={styles.item}>
            <Dish title={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
