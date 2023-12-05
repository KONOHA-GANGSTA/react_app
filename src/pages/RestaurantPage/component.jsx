import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { RestaurantsTabs } from "../../components/RestaurantsTabs/component";
import { restaurants } from "../../constants/mock";
import { Layout } from "../../components/layout/component";

export const RestaurantPage = () => {
  const [selectedRestaurant, changeSelectedRestaurant] = useState(null);
  const restaurant = restaurants.find(
    ({ name }) => name === selectedRestaurant
  );

  return (
    <Layout>
      <RestaurantsTabs
        restaurants={restaurants}
        selected={selectedRestaurant}
        changeSelected={changeSelectedRestaurant}
      />
      <Restaurant restaurant={restaurant} />
    </Layout>
  );
};
