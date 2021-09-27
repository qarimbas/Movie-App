import { moviesConstant } from "../constants/movies.constant";

const INITIAL_STATE = {
  data: [],
  loading: false,
  loaded: false,
  loadFail: false,
};

export const comingSoonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case moviesConstant.LOAD_COMING_SOON_LOAD: {
      return {
        ...state,
        loading: true,
        loaded: false,
        loadFail: false,
      };
    }
    case moviesConstant.LOAD_COMING_SOON_LOADED: {
      return {
        ...state,
        loading: false,
        loaded: true,
        loadFail: false,
        data: action.payload,
      };
    }
    case moviesConstant.LOAD_COMING_SOON_LOAD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        loadFail: true,
      };
    }
    default: {
      return state;
    }
  }
};
