import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";

export const Restaurant = ({ restaurants, selectedRestaurant }) => {
  return (
    <div>
      {!selectedRestaurant && <div>Выберите ресторан</div>}
      {selectedRestaurant &&
        restaurants
          .filter(({ name }) => name === selectedRestaurant)
          .map((restaurant) => (
            <div>
              <h1>{restaurant.name}</h1>
              <Menu dishes={restaurant.menu} />
              <Reviews reviews={restaurant.reviews} />
            </div>
          ))}
    </div>
  );
};
