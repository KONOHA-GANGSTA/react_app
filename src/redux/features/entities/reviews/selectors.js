export const selectReviewsModule = (state) => state.reviews;

export const selectReviewsIds = (state) => selectReviewsModule(state).ids;

export const selectReviewById = (state, id) =>
  selectReviewsModule(state).entities[id];

export const selectReviewTextById = (state, id) =>
  selectReviewById(state, id)?.text;

export const selectReviewsLoadingStatus = (state) =>
  selectReviewsModule(state).status;
