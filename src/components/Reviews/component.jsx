import { Review } from "../Review/component";
import { ReviewForm } from "../ReviewForm/component";
import styles from "./styles.module.css";
import cn from "classnames";
import { useGetReviewsQuery } from "../../redux/services/api";

export const Reviews = ({ restaurant, className }) => {
  const { data, isFetching } = useGetReviewsQuery(restaurant.id);

  if (isFetching)
    return (
      <div className={cn(className, styles.item, styles.header)}>
        <marquee scrolldelay={10} truespeed={1}>
          Загружаем...
        </marquee>
      </div>
    );
  return (
    <div className={className}>
      <div>
        <h2 className={cn(styles.item, styles.header)}>Отзывы</h2>
        <ul>
          {data.map(({ text }) => (
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
