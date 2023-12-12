import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";
import { getDishesByRestaurantId } from "./thunks/getDishesByRestaurantId";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({
    status: REQUEST_STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder
      .addCase(getDishesByRestaurantId.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.upsertMany(state, payload);
        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getDishesByRestaurantId.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      });
  },
});
