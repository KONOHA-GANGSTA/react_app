import { useDispatch, useSelector } from "react-redux";
import { Dish } from "../Dish/component";
import styles from "./styles.module.css";
import cn from "classnames";
import { selectRestaurantMenuById } from "../../redux/features/entities/restaurants/selectors";
import { useEffect } from "react";
import { getDishesByRestaurantId } from "../../redux/features/entities/dishes/thunks/getDishesByRestaurantId";
import { selectDishesLoadingStatus } from "../../redux/features/entities/dishes/selectors";
import { REQUEST_STATUSES } from "../../constants/request-statuses";

export const Menu = ({ restaurantId, className }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
  }, [restaurantId]);

  const menu = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );

  const loadingStatus = useSelector(selectDishesLoadingStatus);

  if (loadingStatus === REQUEST_STATUSES.pending)
    return (
      <div className={cn(className, styles.item, styles.header)}>
        <marquee>Загружаем</marquee>
      </div>
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
