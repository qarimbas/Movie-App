import { createSelector } from "reselect";

export const getInTheatersState = (state) => {
  return state.in_theaters;
};

export const getInTheatersDataSelector = createSelector(
  getInTheatersState,
  (state) => {
    return state.data;
  }
);

export const getInTheatersLoadingSelector = createSelector(
  getInTheatersState,
  (state) => {
    return state.loading;
  }
);
