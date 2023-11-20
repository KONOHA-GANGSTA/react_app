import { Dish } from "../Dish/component";

export const Menu = ({ dishes }) => {
  return (
    <>
      <h2>Меню</h2>
      <ul>
        {dishes.map(({ name }) => (
          <li>
            <Dish title={name} />
          </li>
        ))}
      </ul>
    </>
  );
};