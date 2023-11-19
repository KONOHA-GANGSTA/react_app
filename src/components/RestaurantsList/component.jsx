import { Restaurant } from "../Restaurant/component";

export const RestaurantsList = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
};
