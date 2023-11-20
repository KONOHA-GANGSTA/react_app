import { Restaurants } from "./components/Restaurants/component";
import { RestaurantsTabs } from "./components/RestaurantsTabs/component";
import { restaurants } from "./constants/mock";

export const App = () => {
  return (
    <>
      <RestaurantsTabs restaurants={restaurants} />
      <Restaurants restaurants={restaurants} />
    </>
  );
};
