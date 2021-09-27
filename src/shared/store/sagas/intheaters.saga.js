import { call, put, takeLatest } from "redux-saga/effects";
import { moviesConstant } from "../constants/movies.constant";
import inTheatersService from "./../../services/intheaters.service";
import { inTheatersActions } from "../actions/intheatres.actions";

function* loadInTheatersSaga(action) {
  try {
    const response = yield call(
      inTheatersService.loadInTheaters,
      action.payload
    );
    if (response.status === 200) {
      yield put(inTheatersActions.loadInTheatersSuccessAction(response.data));
    } else {
      yield put(inTheatersActions.loadInTheatersFailAction());
    }
  } catch (error) {
    console.log(error);
    yield put(inTheatersActions.loadInTheatersFailAction());
  }
}

export function* inTheatersWatcherSaga() {
  yield takeLatest(moviesConstant.LOAD_IN_THEATERS_LOAD, loadInTheatersSaga);
}
