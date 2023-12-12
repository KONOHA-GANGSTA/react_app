import { useGetDishesQuery } from "../../redux/services/api";
import { Dish } from "../Dish/component";
import styles from "./styles.module.css";
import cn from "classnames";

export const Menu = ({ restaurant, className }) => {
  const { data, isFetching } = useGetDishesQuery(restaurant.id);

  if (isFetching)
    return (
      <div className={cn(className, styles.item, styles.header)}>
        <marquee scrolldelay={10} truespeed={1}>
          Загружаем...
        </marquee>
      </div>
    );
  console.log(data);

  return (
    <div className={className}>
      <h2 className={cn(styles.item, styles.header)}>Меню</h2>
      <ul>
        {data.map(({ name }) => (
          <li className={styles.item}>
            <Dish name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
