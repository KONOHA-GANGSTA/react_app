import { useSelector } from "react-redux";
import { Review } from "../Review/component";
import { ReviewForm } from "../ReviewForm/component";
import styles from "./styles.module.css";
import cn from "classnames";
import { selectRestaurantReviewsById } from "../../redux/features/entities/restaurants/selectors";

export const Reviews = ({ restaurantId, className }) => {
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
