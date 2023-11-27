import { Review } from "../Review/component";
import { ReviewForm } from "../ReviewForm/component";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <div>
        <h2>Отзывы</h2>
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
