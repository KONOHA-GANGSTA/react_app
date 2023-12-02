import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import styles from "./styles.module.css";
import cn from "classnames";

export const Restaurant = ({ restaurants, selectedRestaurant, className }) => {
  const restaurant = restaurants.find(
    ({ name }) => name === selectedRestaurant
  );
  return (
    <div className={cn(styles.layout, className)}>
      {!selectedRestaurant && (
        <div className={styles.noselect}>Выберите ресторан</div>
      )}
      {selectedRestaurant && (
        <div className={styles.layout}>
          <h1 className={styles.title}>{restaurant.name}</h1>
          <Menu dishes={restaurant.menu} />
          <Reviews reviews={restaurant.reviews} />
        </div>
      )}
    </div>
  );
};
