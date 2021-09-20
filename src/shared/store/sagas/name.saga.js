import { call, put, takeLatest } from "redux-saga/effects";
import { moviesConstant } from "../constants/movies.constant";
import nameService from "./../../services/name.service";
import { nameActions } from "../actions/name.actions";

function* loadNameSaga(action) {
  try {
    const response = yield call(nameService.loadName, action.payload);
    console.log("response Name Saga", response);
    if (response.status === 200) {
      yield put(nameActions.loadNameSuccessAction(response.data));
    } else {
      yield put(nameActions.loadNameFailAction());
    }
  } catch (error) {
    console.log(error);
    yield put(nameActions.loadNameFailAction());
  }
}

export function* nameWatcherSaga() {
  yield takeLatest(moviesConstant.LOAD_NAME_LOAD, loadNameSaga);
}
