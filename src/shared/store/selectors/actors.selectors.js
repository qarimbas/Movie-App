import { createSelector } from "reselect";

export const getActorsState = (state) => {
  return state.actors;
};

export const getActorsDataSelector = createSelector(getActorsState, (state) => {
  return state.data;
});

export const getActorsLoadingSelector = createSelector(
  getActorsState,
  (state) => {
    return state.loading;
  }
);
