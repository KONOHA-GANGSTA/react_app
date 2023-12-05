import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import styles from "./styles.module.css";
import cn from "classnames";
export const Restaurant = ({ restaurant, className }) => {
  return (
    <div className={cn(styles.layout, className)}>
      {restaurant ? (
        <div>
          <h1 className={styles.title}>{restaurant.name}</h1>
          <Menu dishes={restaurant.menu} />
          <Reviews reviews={restaurant.reviews} />
        </div>
      ) : (
        <div className={styles.noselect}>Выберите ресторан</div>
      )}
    </div>
  );
};
