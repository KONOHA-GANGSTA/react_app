import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { RestaurantsTabs } from "../../components/RestaurantsTabs/component";
import { Layout } from "../../components/layout/component";

export const RestaurantPage = () => {
  const [selectedRestaurant, changeSelectedRestaurant] = useState(null);

  return (
    <Layout>
      <RestaurantsTabs
        selected={selectedRestaurant}
        changeSelected={changeSelectedRestaurant}
      />
      <Restaurant selectedRestaurant={selectedRestaurant} />
    </Layout>
  );
};
