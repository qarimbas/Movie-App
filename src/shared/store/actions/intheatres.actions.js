import { moviesConstant } from "../constants/movies.constant";

const loadInTheatersAction = (payload) => {
  return {
    type: moviesConstant.LOAD_IN_THEATERS_LOAD,
    payload,
  };
};

const loadInTheatersSuccessAction = (payload) => {
  return {
    type: moviesConstant.LOAD_IN_THEATERS_LOADED,
    payload,
  };
};

const loadInTheatersFailAction = () => {
  return {
    type: moviesConstant.LOAD_IN_THEATERS_LOAD_FAIL,
  };
};

export const inTheatersActions = {
  loadInTheatersAction,
  loadInTheatersSuccessAction,
  loadInTheatersFailAction,
};
