import { Restaurant } from "../Restaurant/component";

export const Restaurants = ({ restaurants, selectedRestaurant }) => {
  return (
    <div>
      {!selectedRestaurant && <div>Выберите ресторан</div>}
      {selectedRestaurant &&
        restaurants
          .filter(({ name }) => name === selectedRestaurant)
          .map((restaurant) => <Restaurant restaurant={restaurant} />)}
    </div>
  );
};
