import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import styles from "./styles.module.css";

export const Restaurant = ({ restaurants, selectedRestaurant }) => {
  const restaurant = restaurants.find(
    ({ name }) => name === selectedRestaurant
  );
  return (
    <div className={styles.layout}>
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
