import { RestaurantTab } from "../RestaurantTab/component";

export const RestaurantsTabs = ({ restaurants, changeSelected }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantTab name={restaurant.name} changeSelected={changeSelected}/>
      ))}
    </div>
  );
};
