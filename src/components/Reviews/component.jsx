import { useDispatch, useSelector } from "react-redux";
import { Review } from "../Review/component";
import { ReviewForm } from "../ReviewForm/component";
import styles from "./styles.module.css";
import cn from "classnames";
import { selectRestaurantReviewsById } from "../../redux/features/entities/restaurants/selectors";
import { useEffect } from "react";
import { getReviewsByRestaurantId } from "../../redux/features/entities/reviews/thunks/getReviewsByRestaurantId";
import { selectReviewsLoadingStatus } from "../../redux/features/entities/reviews/selectors";
import { REQUEST_STATUSES } from "../../constants/request-statuses";

export const Reviews = ({ restaurantId, className }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [restaurantId]);

  const reviews = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  const loadingStatus = useSelector(selectReviewsLoadingStatus);

  if (loadingStatus === REQUEST_STATUSES.pending)
    return (
      <div className={cn(className, styles.item, styles.header)}>
        <marquee>Загружаем</marquee>
      </div>
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
