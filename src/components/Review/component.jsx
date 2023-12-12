import { useState } from "react";
import { LayoutButton } from "../LayoutButton/component";
import styles from "./styles.module.css";
import cn from "classnames";
import { ReviewForm } from "../ReviewForm/component";
import { useChangeReviewMutation } from "../../redux/services/api";

export const Review = ({ review, className }) => {
  const [isEditing, setEditing] = useState(false);
  const [changeReview, result] = useChangeReviewMutation();

  return (
    <>
      <div className={cn(styles.item, className)}>
        <div>{review.text}</div>
        <div>
          <LayoutButton
            type={"button"}
            className={styles.button}
            onClick={() => setEditing(!isEditing)}
          >
            ...
          </LayoutButton>
        </div>
      </div>
      {isEditing && (
        <ReviewForm
          buttonCallback={changeReview}
          defaultState={review}
          hideHeader
        />
      )}
    </>
  );
};
