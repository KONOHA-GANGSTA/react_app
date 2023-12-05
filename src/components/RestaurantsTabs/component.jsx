import { useCallback, useRef, useState } from "react";
import { RestaurantTab } from "../RestaurantTab/component";
import styles from "./styles.module.css";
import cn from "classnames";

const move_gradient = (event, layout, setGradPosition) => {
  let position =
    (((event.clientX - layout.offsetLeft) / layout.offsetWidth) * 100).toFixed(
      2
    ) + "%";
  setGradPosition({ transition: "None", left: position });
};


export const RestaurantsTabs = ({
  restaurants,
  selected,
  changeSelected,
  className,
}) => {
  const layout = useRef();

  const [gradPosition, setGradPosition] = useState({
    transition: "1s",
    left: "50%",
  });

  const callback = useCallback((event) => {
    move_gradient(event, layout.current, setGradPosition);
  });

  const leave = () => {
    setGradPosition({
      transition: "1s",
      left: "50%",
    });
  };

  return (
    <div
      ref={layout}
      className={cn(styles.tabs, className)}
      onMouseMove={callback}
      onMouseLeave={leave}
    >
      <div className={styles.pointer} style={gradPosition} />
      {restaurants.map((restaurant) => (
        <RestaurantTab
          name={restaurant.name}
          selected={selected}
          changeSelected={changeSelected}
          className={styles.topLevel}
        />
      ))}
    </div>
  );
};
