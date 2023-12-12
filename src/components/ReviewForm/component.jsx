import { useEffect, useReducer } from "react";
import { Counter } from "../Counter/component";
import styles from "./styles.module.css";
import cn from "classnames";
import { LayoutButton } from "../LayoutButton/component";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 1,
  userId: "a304959a-76c0-4b34-954a-b38dbf310360",
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

export const ReviewForm = ({
  className,
  hideHeader,
  defaultState,
  buttonCallback,
  restaurantId,
}) => {
  const [formValue, dispatch] = useReducer(
    reducer,
    defaultState ? defaultState : DEFAULT_FORM_VALUE
  );

  return (
    <div className={className}>
      {hideHeader ? null : (
        <h3 className={cn(styles.item, styles.header)}>Оставьте отзыв</h3>
      )}
      <form className={styles.layout}>
        <div className={styles.item}>
          <input
            type="text"
            placeholder="Name"
            disabled={defaultState}
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
              dispatch({
                type: "setRating",
                payload: formValue.rating + 0.5,
              })
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
        <div
          className={styles.item}
          style={{ backgroundColor: "rgba(0,0,0,0)" }}
        >
          <LayoutButton
            className={styles.button}
            type="button"
            onClick={() => {
              if (defaultState)
                buttonCallback({
                  reviewId: defaultState.id,
                  newReview: formValue,
                });
              else buttonCallback({ restaurantId, newReview: formValue });
            }}
          >
            Оставить отзыв
          </LayoutButton>
        </div>
      </form>
    </div>
  );
};
