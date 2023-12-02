import { useCallback, useRef } from "react";
import { RestaurantTab } from "../RestaurantTab/component";
import styles from "./styles.module.css";
import cn from "classnames";

const move_gradient = (event, layout, gradient) => {
  let position =
    (((event.clientX - layout.offsetLeft) / layout.offsetWidth) * 100).toFixed(
      2
    ) + "%";
  gradient.style.transition = "None";
  gradient.style.left = position;
};

export const RestaurantsTabs = ({
  restaurants,
  selected,
  changeSelected,
  className,
}) => {
  const layout = useRef();
  const gradient = useRef();
  const callback = useCallback((event) => {
    move_gradient(event, layout.current, gradient.current);
  });
  const leave = () => {
    gradient.current.style.transition = "1s";
    gradient.current.style.left = "50%";
  };
  return (
    <div
      ref={layout}
      className={cn(styles.tabs, className)}
      onMouseMove={callback}
      onMouseLeave={leave}
    >
      <div ref={gradient} className={styles.pointer} />
      {restaurants.map((restaurant) => (
        <RestaurantTab
          name={restaurant.name}
          selected={selected}
          changeSelected={changeSelected}
        />
      ))}
    </div>
  );
};
