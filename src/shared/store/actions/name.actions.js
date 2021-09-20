import { moviesConstant } from "../constants/movies.constant";

const loadNameAction = (payload) => {
  return {
    type: moviesConstant.LOAD_NAME_LOAD,
    payload,
  };
};

const loadNameSuccessAction = (payload) => {
  return {
    type: moviesConstant.LOAD_NAME_LOADED,
    payload,
  };
};

const loadNameFailAction = () => {
  return {
    type: moviesConstant.LOAD_NAME_LOAD_FAIL,
  };
};

export const nameActions = {
  loadNameAction,
  loadNameSuccessAction,
  loadNameFailAction,
};
