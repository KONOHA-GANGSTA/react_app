import { useSelector } from "react-redux";
import styles from "./style.module.css";
import cn from "classnames";
import { selectRestaurantNameById } from "../../redux/features/entities/restaurants/selectors";

export const RestaurantTab = ({ id, selected, changeSelected, className }) => {
  const name = useSelector((state) => selectRestaurantNameById(state, id));
  return (
    <button
      className={cn(
        styles.tab,
        { [styles.active]: selected === id },
        className
      )}
      onClick={() => {
        changeSelected(id);
      }}
    >
      {name}
      <span />
      <span />
      <span />
      <span />
    </button>
  );
};
