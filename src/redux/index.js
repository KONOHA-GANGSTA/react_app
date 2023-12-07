import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./features/entities/restaurants";
import { dishesSlice } from "./features/entities/dishes";
import { usersSlice } from "./features/entities/users";
import { reviewsSlice } from "./features/entities/reviews";

const store = configureStore({
  reducer: {
    restaurants: restaurantsSlice.reducer,
    dishes: dishesSlice.reducer,
    users: usersSlice.reducer,
    reviews: reviewsSlice.reducer,
  },
});

export default store;
