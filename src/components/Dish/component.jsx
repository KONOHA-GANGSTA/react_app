import { Counter } from "../Counter/component";

export const Dish = ({ title }) => {
  return (
    <div>
      <div>{title}</div>
      <Counter min={0} max={5} />
    </div>
  );
};
