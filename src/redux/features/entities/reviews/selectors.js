export const selectReviewsModule = (state) => state.reviews;

export const selectReviewById = (state, id) =>
  selectReviewsModule(state).entities[id];

export const selectReviewTextById = (state, id) =>
  selectReviewById(state, id).text;
