import { createSelector } from "reselect";

export const getNameState = (state) => {
  return state.namedetail;
};

export const getNameDataSelector = createSelector(getNameState, (state) => {
  return state.data;
});

export const getNameLoadingSelector = createSelector(getNameState, (state) => {
  return state.loading;
});
