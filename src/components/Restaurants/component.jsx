import { Restaurant } from "../Restaurant/component";

export const Restaurants = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
};
