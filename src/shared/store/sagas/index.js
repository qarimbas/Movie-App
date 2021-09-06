import { all } from "redux-saga/effects";
import { moviesWatcherSaga } from "./movies.saga";
import { movieWatcherSaga } from "./movie.saga";

export default function* rootSaga() {
  yield all([movieWatcherSaga(), moviesWatcherSaga()]);
}
