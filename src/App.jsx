import { useState } from "react";
import { Restaurant } from "./components/Restaurant/component";
import { RestaurantsTabs } from "./components/RestaurantsTabs/component";
import { restaurants } from "./constants/mock";

export const App = () => {
  const [selectedRestaurant, changeSelectedRestaurant] = useState(null);
  return (
    <>
      <RestaurantsTabs
        restaurants={restaurants}
        changeSelected={changeSelectedRestaurant}
      />
      <Restaurant
        restaurants={restaurants}
        selectedRestaurant={selectedRestaurant}
      />
    </>
  );
};
