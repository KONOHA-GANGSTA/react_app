import styles from "./style.module.css";
import cn from "classnames";
export const RestaurantTab = ({ name, selected, changeSelected }) => {
  return (
    <button
      className={cn(styles.tab, { [styles.active]: selected === name })}
      onClick={() => changeSelected(name)}
    >
      {name}
      <span />
      <span />
      <span />
      <span />
    </button>
  );
};
