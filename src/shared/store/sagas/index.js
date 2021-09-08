import { all } from "redux-saga/effects";
import { moviesWatcherSaga } from "./movies.saga";
import { movieWatcherSaga } from "./movie.saga";
import { actorsWatcherSaga } from "./actors.saga";

export default function* rootSaga() {
  yield all([movieWatcherSaga(), moviesWatcherSaga(), actorsWatcherSaga()]);
}
