import { createSelector } from "reselect";

export const getSearchState = (state) => {
  return state.searchresult;
};

export const getSearchSelector = createSelector(getSearchState, (state) => {
  return state.data;
});

export const getSearchLoadingSelector = createSelector(
  getSearchState,
  (state) => {
    return state.loading;
  }
);
