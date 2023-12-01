export const RestaurantTab = ({ name, changeSelected }) => {
  return <button onClick={() => changeSelected(name)}>{name}</button>;
};
