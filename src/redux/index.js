import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./features/entities/restaurants";
import { dishesSlice } from "./features/entities/dishes";
import { usersSlice } from "./features/entities/users";
import { reviewsSlice } from "./features/entities/reviews";
import { api } from "./services/api";

const store = configureStore({
  reducer: {
    restaurants: restaurantsSlice.reducer,
    dishes: dishesSlice.reducer,
    users: usersSlice.reducer,
    reviews: reviewsSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});

export default store;
