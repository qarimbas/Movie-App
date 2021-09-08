import { call, put, takeLatest } from "redux-saga/effects";
import { moviesConstant } from "../constants/movies.constant";
import actorsService from "./../../services/actors.service";
import { actorsActions } from "../actions/actors.actions";

function* loadActorsSaga(action) {
  try {
    console.log(action.payload);
    const response = yield call(actorsService.loadActors, action.payload);
    console.log("response Actors Saga", response);
    if (response.status === 200) {
      yield put(actorsActions.loadActorsSuccessAction(response.data));
    } else {
      yield put(actorsActions.loadActorsFailAction());
    }
  } catch (error) {
    console.log(error);
    yield put(actorsActions.loadActorsFailAction());
  }
}

export function* actorsWatcherSaga() {
  yield takeLatest(moviesConstant.LOAD_ACTORS_LOAD, loadActorsSaga);
}
