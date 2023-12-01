export const Counter = ({ number, increment, decrement, min, max }) => {
  return (
    <div>
      <button type="button" onClick={decrement} disabled={number <= min}>
        -
      </button>
      <div>{number}</div>
      <button type="button" onClick={increment} disabled={number >= max}>
        +
      </button>
    </div>
  );
};
