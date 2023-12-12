import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/getRestaurants";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState({
    status: REQUEST_STATUSES.idle,
  }),
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});
