import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewsLoadedIds } from "../selectors";

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
    condition: (restaurantId, { getState }) =>
      !selectReviewsLoadedIds(getState()).includes(restaurantId),
  }
);
