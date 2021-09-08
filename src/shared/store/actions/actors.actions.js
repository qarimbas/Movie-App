import { moviesConstant } from "../constants/movies.constant";

const loadActorsAction = (payload) => {
  return {
    type: moviesConstant.LOAD_ACTORS_LOAD,
    payload,
  };
};

const loadActorsSuccessAction = (payload) => {
  return {
    type: moviesConstant.LOAD_ACTORS_LOADED,
    payload,
  };
};

const loadActorsFailAction = () => {
  return {
    type: moviesConstant.LOAD_ACTORS_LOAD_FAIL,
  };
};

export const actorsActions = {
  loadActorsAction,
  loadActorsSuccessAction,
  loadActorsFailAction,
};
