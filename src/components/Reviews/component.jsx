import { Review } from "../Review/component";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h2>Отзывы</h2>
      <ul>
        {reviews.map(({ text }) => (
          <li>
            <Review text={text} />
          </li>
        ))}
      </ul>
    </>
  );
};
