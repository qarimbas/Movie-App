import { moviesConstant } from "../constants/movies.constant";

const loadSearchAction = (payload) => {
  return {
    type: moviesConstant.LOAD_SEARCH_LOAD,
    payload,
  };
};

const loadSearchSuccessAction = (payload) => {
  return {
    type: moviesConstant.LOAD_SEARCH_LOADED,
    payload,
  };
};

const loadSearchFailAction = () => {
  return {
    type: moviesConstant.LOAD_SEARCH_LOAD_FAIL,
  };
};

export const searchActions = {
  loadSearchAction,
  loadSearchSuccessAction,
  loadSearchFailAction,
};
