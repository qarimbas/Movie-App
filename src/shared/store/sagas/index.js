import {all} from 'redux-saga/effects';
import {moviesWatcherSaga} from "./movies.saga";

export default function* rootSaga(){
    yield all([moviesWatcherSaga()])
}
