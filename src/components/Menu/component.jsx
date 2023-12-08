import { useSelector } from "react-redux";
import { Dish } from "../Dish/component";
import styles from "./styles.module.css";
import cn from "classnames";
import { selectRestaurantMenuById } from "../../redux/features/entities/restaurants/selectors";

export const Menu = ({ restaurantId, className }) => {
  const menu = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );
  return (
    <div className={className}>
      <h2 className={cn(styles.item, styles.header)}>Меню</h2>
      <ul>
        {menu.map((id) => (
          <li className={styles.item}>
            <Dish id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
