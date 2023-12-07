import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { RestaurantsTabs } from "../../components/RestaurantsTabs/component";
import { restaurants } from "../../constants/mock";
import { Layout } from "../../components/layout/component";

export const RestaurantPage = () => {
  const [selectedRestaurantId, changeSelectedRestaurantId] = useState(null);
  return (
    <Layout>
      <RestaurantsTabs
        selected={selectedRestaurantId}
        changeSelected={changeSelectedRestaurantId}
      />

      <Restaurant selectedRestaurantId={selectedRestaurantId} />
    </Layout>
  );
};
