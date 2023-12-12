export const selectDishesModule = (state) => state.dishes;

export const selectDishesIds = (state) => selectDishesModule(state).ids;

export const selectDishById = (state, id) =>
  selectDishesModule(state).entities[id];

export const selectDishNameById = (state, id) =>
  selectDishById(state, id)?.name;

export const selectDishesLoadingStatus = (state) =>
  selectDishesModule(state).status;
