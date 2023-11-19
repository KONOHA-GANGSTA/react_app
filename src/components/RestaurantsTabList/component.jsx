import { RestaurantTab } from "../RestaurantTab/component";

export const RestaurantsTabList = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantTab name={restaurant.name} />
      ))}
    </div>
  );
};
