import { call, put, takeLatest } from "redux-saga/effects";
import { moviesConstant } from "../constants/movies.constant";
import movieService from "./../../services/movie.service";
import { movieActions } from "../actions/movie.actions";

function* loadMovieSaga(action) {
  try {
    const response = yield call(movieService.loadMovie, action.payload);
    console.log("response Movie Saga", response);
    if (response.status === 200) {
      yield put(movieActions.loadMovieSuccessAction(response.data.items));
    } else {
      yield put(movieActions.loadMovieFailAction());
    }
  } catch (error) {
    console.log(error);
    yield put(movieActions.loadMovieFailAction());
  }
}

export function* movieWatcherSaga() {
  yield takeLatest(moviesConstant.LOAD_MOVIE_LOAD, loadMovieSaga);
}
