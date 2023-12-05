import { useEffect, useReducer } from "react";
import { Counter } from "../Counter/component";
import styles from "./styles.module.css";
import cn from "classnames";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return (state = { ...state, name: action.payload });
    case "setText":
      return (state = { ...state, text: action.payload });
    case "setRating":
      return (state = { ...state, rating: action.payload });
    default:
      return state;
  }
};

export const ReviewForm = ({ className }) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
  useEffect(() => {
    dispatch({ type: "setText", payload: DEFAULT_FORM_VALUE.text });
    dispatch({ type: "setRating", payload: DEFAULT_FORM_VALUE.rating });
  }, [formValue.name]);
  return (
    <div className={className}>
      <h3 className={cn(styles.item, styles.header)}>Оставьте отзыв</h3>
      <form className={styles.layout}>
        <div className={styles.item}>
          <input
            type="text"
            placeholder="Name"
            onChange={(event) =>
              dispatch({ type: "setName", payload: event.target.value })
            }
          />
        </div>
        <div className={styles.item}>
          <span>Rating:</span>
          <Counter
            number={formValue.rating}
            increment={() =>
              dispatch({ type: "setRating", payload: formValue.rating + 0.5 })
            }
            decrement={() =>
              dispatch({ type: "setRating", payload: formValue.rating - 0.5 })
            }
            min={1}
            max={5}
            aliginEnd
          />
        </div>
        <div className={styles.item}>
          <input
            type="textarea"
            placeholder="Text"
            onChange={(event) =>
              dispatch({ type: "setText", payload: event.target.value })
            }
            value={formValue.text}
          />
        </div>
      </form>
    </div>
  );
};
