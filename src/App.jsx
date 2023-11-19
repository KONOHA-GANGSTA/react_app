import { RestaurantsList } from "./components/RestaurantsList/component";
import { RestaurantsTabList } from "./components/RestaurantsTabList/component";
import { restaurants } from "./constants/mock";

export const App = () => {
  return (
    <>
      <RestaurantsTabList restaurants={restaurants} />
      <RestaurantsList restaurants={restaurants} />
    </>
  );
};
