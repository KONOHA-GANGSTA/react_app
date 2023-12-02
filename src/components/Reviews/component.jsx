import { Review } from "../Review/component";
import { ReviewForm } from "../ReviewForm/component";
import styles from "./styles.module.css";
import cn from "classnames";

export const Reviews = ({ reviews, className }) => {
  return (
    <div className={className}>
      <div>
        <h2 className={cn(styles.item, styles.header)}>Отзывы</h2>
        <ul>
          {reviews.map(({ text }) => (
            <li>
              <Review text={text} />
            </li>
          ))}
        </ul>
      </div>
      <ReviewForm />
    </div>
  );
};
