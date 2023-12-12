import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewsIds, selectReviewsLoadingStatus } from "../selectors";
import { selectRestaurantReviewsById } from "../../restaurants/selectors";

export const getReviewsByRestaurantId = createAsyncThunk(
  "review/getReviewsByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("There is no reviews about this restaurant");
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const reviewsIds = selectReviewsIds(state);
      const restaurantReviewsIds = selectRestaurantReviewsById(
        state,
        restaurantId
      );
      return !restaurantReviewsIds.every((id) => reviewsIds.includes(id));
    },
  }
);
