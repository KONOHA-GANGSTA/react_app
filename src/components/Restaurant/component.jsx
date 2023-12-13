import { useGetRestaurantsQuery } from "../../redux/services/api";
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import styles from "./styles.module.css";
import cn from "classnames";

export const Restaurant = ({ selectedRestaurant, className }) => {
  const { data } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result?.data?.find(
          ({ name: restaurantName }) => selectedRestaurant === restaurantName
        ),
      };
    },
  });

  return (
    <div className={cn(styles.layout, className)}>
      {selectedRestaurant ? (
        <div className={styles.layout}>
          <h1 className={styles.title}>{data.name}</h1>
          <Menu restaurant={data} />
          <Reviews restaurant={data} />
        </div>
      ) : (
        <div className={styles.noselect}>Выберите ресторан</div>
      )}
    </div>
  );
};
