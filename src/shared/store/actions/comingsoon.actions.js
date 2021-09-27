import { moviesConstant } from "../constants/movies.constant";

const loadComingSoonAction = (payload) => {
  return {
    type: moviesConstant.LOAD_COMING_SOON_LOAD,
    payload,
  };
};

const loadComingSoonSuccessAction = (payload) => {
  return {
    type: moviesConstant.LOAD_COMING_SOON_LOADED,
    payload,
  };
};

const loadComingSoonFailAction = () => {
  return {
    type: moviesConstant.LOAD_COMING_SOON_LOAD_FAIL,
  };
};

export const comingSoonActions = {
  loadComingSoonAction,
  loadComingSoonSuccessAction,
  loadComingSoonFailAction,
};
