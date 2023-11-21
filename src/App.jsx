import { useState } from "react";
import { Restaurants } from "./components/Restaurants/component";
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
      <Restaurants
        restaurants={restaurants}
        selectedRestaurant={selectedRestaurant}
      />
    </>
  );
};
