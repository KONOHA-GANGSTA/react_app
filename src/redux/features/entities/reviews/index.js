import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./thunks/getReviewsByRestaurantId";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({
    status: REQUEST_STATUSES.idle,
  }),
  extraReducers: (builder) =>
    builder
      .addCase(getReviewsByRestaurantId.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.upsertMany(state, payload);
        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getReviewsByRestaurantId.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});
