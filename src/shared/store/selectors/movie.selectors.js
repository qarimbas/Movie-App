import { createSelector } from "reselect";

export const getMovieState = (state) => {
  return state.moviedetail;
};

export const getMovieDataSelector = createSelector(getMovieState, (state) => {
  return state.data;
});

export const getMovieLoadingSelector = createSelector(
  getMovieState,
  (state) => {
    return state.loading;
  }
);
