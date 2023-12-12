import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesIds } from "../selectors";
import { selectRestaurantMenuById } from "../../restaurants/selectors";

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
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantDishIds = selectRestaurantMenuById(state, restaurantId);
      const dishIds = selectDishesIds(state);

      return !restaurantDishIds.every((id) => dishIds.includes(id));
    },
  }
);
