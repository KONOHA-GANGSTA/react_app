import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import styles from "./styles.module.css";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      {restaurant ? (
        <div>
          <h1>{restaurant.name}</h1>
          <Menu dishes={restaurant.menu} />
          <Reviews reviews={restaurant.reviews} />
        </div>
      ) : (
        <div>Выберите ресторан</div>
      )}
    </div>
  );
};
