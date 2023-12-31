import { useSelector } from "react-redux";
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import styles from "./styles.module.css";
import cn from "classnames";
import { selectRestaurantNameById } from "../../redux/features/entities/restaurants/selectors";

export const Restaurant = ({ selectedRestaurantId, className }) => {
  const name = useSelector((state) =>
    selectRestaurantNameById(state, selectedRestaurantId)
  );
  return (
    <div className={cn(styles.layout, className)}>
      {selectedRestaurantId ? (
        <div className={styles.layout}>
          <h1 className={styles.title}>{name}</h1>
          <Menu restaurantId={selectedRestaurantId} />
          <Reviews restaurantId={selectedRestaurantId} />
        </div>
      ) : (
        <div className={styles.noselect}>Выберите ресторан</div>
      )}
    </div>
  );
};
