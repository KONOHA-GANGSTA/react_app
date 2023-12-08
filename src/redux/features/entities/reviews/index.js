import { createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./thunks/getReviewsByRestaurantId";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.idle,
    loaded_ids: [],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviewsByRestaurantId.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getReviewsByRestaurantId.fulfilled, (state, action) => {
        state.entities = action.payload.reduce((acc, review) => {
          acc[review.id] = review;
          return acc;
        }, state.entities);
        state.ids = state.ids.concat(action.payload.map(({ id }) => id));
        state.loaded_ids.push(action.meta.arg);
        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getReviewsByRestaurantId.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});
