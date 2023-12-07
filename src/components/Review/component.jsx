import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import cn from "classnames";
import { selectReviewTextById } from "../../redux/features/entities/reviews/selectors";

export const Review = ({ id, className }) => {
  const text = useSelector((state) => selectReviewTextById(state, id));
  return <div className={cn(styles.item, className)}>{text}</div>;
};
