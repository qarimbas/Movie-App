import { moviesConstant } from "../constants/movies.constant";

const INITIAL_STATE = {
  data: [],
  selectedActorId: null,
  selectedActor: null,
  loading: false,
  loaded: false,
  loadFail: false,
};

export const nameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case moviesConstant.LOAD_NAME_LOAD: {
      // data manipulation
      return {
        ...state,
        loading: true,
        loaded: false,
        loadFail: false,
      };
    }
    case moviesConstant.LOAD_NAME_LOADED: {
      // data manipulation
      return {
        ...state,
        loading: false,
        loaded: true,
        loadFail: false,
        data: action.payload,
      };
    }
    case moviesConstant.LOAD_NAME_LOAD_FAIL: {
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
