import {createSelector} from "reselect";

export const getMoviesState = (state) => {
    return state.movies;
}

export const getMoviesDataSelector = createSelector(getMoviesState, (state) => {
    return state.data;
})

export const getMoviesLoadingSelector = createSelector(getMoviesState, (state) => {
    return state.loading;
})
