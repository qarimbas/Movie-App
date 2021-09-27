import { createSelector } from "reselect";

export const getComingSoonState = (state) => {
  return state.coming_soon;
};

export const getComingSoonDataSelector = createSelector(
  getComingSoonState,
  (state) => {
    return state.data;
  }
);

export const getComingSoonLoadingSelector = createSelector(
  getComingSoonState,
  (state) => {
    return state.loading;
  }
);
