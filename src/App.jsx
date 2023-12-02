import { useState } from "react";
import { Restaurant } from "./components/Restaurant/component";
import { RestaurantsTabs } from "./components/RestaurantsTabs/component";
import { restaurants } from "./constants/mock";

export const App = () => {
  const [selectedRestaurant, changeSelectedRestaurant] = useState(null);
  const restaurant = restaurants.find(
    ({ name }) => name === selectedRestaurant
  );
  return (
    <>
      <RestaurantsTabs
        restaurants={restaurants}
        selected={selectedRestaurant}
        changeSelected={changeSelectedRestaurant}
      />
      <Restaurant
        restaurant={restaurant}
      />
    </>
  );
};
