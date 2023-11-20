import { RestaurantsList } from "./components/Restaurants/component";
import { RestaurantsTabList } from "./components/RestaurantsTabs/component";
import { restaurants } from "./constants/mock";

export const App = () => {
  return (
    <>
      <RestaurantsTabList restaurants={restaurants} />
      <RestaurantsList restaurants={restaurants} />
    </>
  );
};
