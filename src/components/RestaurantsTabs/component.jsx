import { RestaurantTab } from "../RestaurantTab/component";

export const RestaurantsTabs = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantTab name={restaurant.name} />
      ))}
    </div>
  );
};
