import { useState } from "react";

export const Counter = ({ min, max }) => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <button onClick={() => setNumber(number == min ? 0 : number - 1)}>
        -
      </button>
      <div>{number}</div>
      <button onClick={() => setNumber(number == max ? 5 : number + 1)}>
        +
      </button>
    </div>
  );
};
