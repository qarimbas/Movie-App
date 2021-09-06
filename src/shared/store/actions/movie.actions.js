import { moviesConstant } from "../constants/movies.constant";

const loadMovieAction = (payload) => {
  return {
    type: moviesConstant.LOAD_MOVIE_LOAD,
    payload,
  };
};

const loadMovieSuccessAction = (payload) => {
  return {
    type: moviesConstant.LOAD_MOVIE_LOADED,
    payload,
  };
};

const loadMovieFailAction = () => {
  return {
    type: moviesConstant.LOAD_MOVIE_LOAD_FAIL,
  };
};

export const movieActions = {
  loadMovieAction,
  loadMovieSuccessAction,
  loadMovieFailAction,
};
