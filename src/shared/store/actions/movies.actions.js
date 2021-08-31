import {moviesConstant} from "../constants/movies.constant";

const loadMoviesAction = (payload) => {
    return {
        type: moviesConstant.LOAD_MOVIES_LOAD,
        payload,
    }
}

const loadMoviesSuccessAction = (payload) => {
    return {
        type: moviesConstant.LOAD_MOVIES_LOADED,
        payload,
    }
}

const loadMoviesFailAction = () => {
    return {
        type: moviesConstant.LOAD_MOVIES_LOAD_FAIL,
    }
}

export const moviesActions = {
    loadMoviesAction,
    loadMoviesSuccessAction,
    loadMoviesFailAction,
}
