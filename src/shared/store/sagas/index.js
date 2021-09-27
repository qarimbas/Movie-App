import { all } from "redux-saga/effects";
import { moviesWatcherSaga } from "./movies.saga";
import { movieWatcherSaga } from "./movie.saga";
import { actorsWatcherSaga } from "./actors.saga";
import { searchWatcherSaga } from "./search.saga";
import { nameWatcherSaga } from "./name.saga";
import { inTheatersWatcherSaga } from "./intheaters.saga";
import { comingSoonWatcherSaga } from "./comingsoon.saga";

export default function* rootSaga() {
  yield all([
    movieWatcherSaga(),
    moviesWatcherSaga(),
    actorsWatcherSaga(),
    searchWatcherSaga(),
    nameWatcherSaga(),
    inTheatersWatcherSaga(),
    comingSoonWatcherSaga(),
  ]);
}
