import { useDispatch, useSelector } from "react-redux";
import { Review } from "../Review/component";
import { ReviewForm } from "../ReviewForm/component";
import styles from "./styles.module.css";
import cn from "classnames";
import { selectRestaurantReviewsById } from "../../redux/features/entities/restaurants/selectors";
import { useEffect } from "react";
import { getReviewsByRestaurantId } from "../../redux/features/entities/reviews/thunks/getReviewsByRestaurantId";

export const Reviews = ({ restaurantId, className }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [restaurantId]);

  const reviews = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );
  return (
    <div className={className}>
      <div>
        <h2 className={cn(styles.item, styles.header)}>Отзывы</h2>
        <ul>
          {reviews.map((id) => (
            <li>
              <Review id={id} />
            </li>
          ))}
        </ul>
      </div>
      <ReviewForm />
    </div>
  );
};
