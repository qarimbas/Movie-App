import { moviesConstant } from "../constants/movies.constant";

const INITIAL_STATE = {
  data: [],
  selectedMovieId: null,
  selectedMovie: null,
  loading: false,
  loaded: false,
  loadFail: false,
};

export const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case moviesConstant.LOAD_SEARCH_LOAD: {
      // data manipulation
      return {
        ...state,
        loading: true,
        loaded: false,
        loadFail: false,
        data: action.payload,
      };
    }
    case moviesConstant.LOAD_SEARCH_LOADED: {
      // data manipulation
      return {
        ...state,
        loading: false,
        loaded: true,
        loadFail: false,
        data: action.payload,
      };
    }
    case moviesConstant.LOAD_SEARCH_LOAD_FAIL: {
      // data manipulation
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
