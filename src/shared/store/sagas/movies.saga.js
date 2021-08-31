import {call, takeLatest, put} from 'redux-saga/effects'
import {moviesConstant} from "../constants/movies.constant";
import moviesService from './../../services/movies.service';
import {moviesActions} from "../actions/movies.actions";

function* loadMovieSaga(action) {
    try {
        const response = yield call(moviesService.loadMovies, action.payload);
        console.log('response', response);
        if (response.status === 200) {
            yield put(moviesActions.loadMoviesSuccessAction(response.data.items));
        } else {
            yield put(moviesActions.loadMoviesFailAction());
        }
    } catch (error) {
        console.log(error);
        yield put(moviesActions.loadMoviesFailAction());
    }
}

export function* moviesWatcherSaga() {
    yield takeLatest(moviesConstant.LOAD_MOVIES_LOAD, loadMovieSaga)
}
