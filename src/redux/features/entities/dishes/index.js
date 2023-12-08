import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";
import { getDishesByRestaurantId } from "./thunks/getDishesByRestaurantId";

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.idle,
    loaded_ids: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDishesByRestaurantId.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getDishesByRestaurantId.fulfilled, (state, action) => {
        state.entities = action.payload.reduce((acc, dish) => {
          acc[dish.id] = dish;
          return acc;
        }, state.entities);
        state.ids = state.ids.concat(action.payload.map(({ id }) => id));
        state.loaded_ids.push(action.meta.arg);
        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getDishesByRestaurantId.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      });
  },
});
