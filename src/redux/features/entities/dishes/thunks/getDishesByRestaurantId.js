import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesLoadedIds } from "../selectors";

export const getDishesByRestaurantId = createAsyncThunk(
  "dishes/getDishesByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("There is no dishes in this restaurant");
    }
    return result;
  },
  {
    condition: (restaurantId, { getState }) =>
      !selectDishesLoadedIds(getState()).includes(restaurantId),
  }
);
