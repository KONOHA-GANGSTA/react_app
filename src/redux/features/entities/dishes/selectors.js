export const selectDishesModule = (state) => state.dishes;

export const selectDishById = (state, id) =>
  selectDishesModule(state).entities[id];

export const selectDishNameById = (state, id) => selectDishById(state, id).name;
