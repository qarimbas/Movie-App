import {moviesConstant} from "../constants/movies.constant";

const INITIAL_STATE = {
    data: [],
    selectedMovieId: null,
    selectedMovie: null,
    loading: false,
    loaded: false,
    loadFail: false,
}

export const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case moviesConstant.LOAD_MOVIES_LOAD: {
            // data manipulation
            return {
                ...state,
                loading: true,
                loaded: false,
                loadFail: false,
            }
        }
        case moviesConstant.LOAD_MOVIES_LOADED: {
            // data manipulation
            return {
                ...state,
                loading: false,
                loaded: true,
                loadFail: false,
                data: action.payload
            }
        }
        case moviesConstant.LOAD_MOVIES_LOAD_FAIL: {
            // data manipulation
            return {
                ...state,
                loading: false,
                loaded: false,
                loadFail: true,
            }
        }
        default: {
            return state;
        }
    }
}
