export const selectRestaurantsModule = (state) => state.restaurants;

export const selectRestaurantsIds = (state) =>
  selectRestaurantsModule(state).ids;

export const selectRestaurantById = (state, id) =>
  selectRestaurantsModule(state).entities[id];

export const selectRestaurantNameById = (state, id) =>
  selectRestaurantById(state, id)?.name;

export const selectRestaurantMenuById = (state, id) =>
  selectRestaurantById(state, id).menu;

export const selectRestaurantReviewsById = (state, id) =>
  selectRestaurantById(state, id).reviews;
