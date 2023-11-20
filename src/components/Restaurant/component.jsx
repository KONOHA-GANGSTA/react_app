import { Reviews } from "../../Reviews/component";
import { Menu } from "../Menu/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <Menu dishes={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
