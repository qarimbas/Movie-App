import { call, put, takeLatest } from "redux-saga/effects";
import { moviesConstant } from "../constants/movies.constant";
import comingSoonService from "./../../services/comingsoon.service";
import { comingSoonActions } from "../actions/comingsoon.actions";

function* loadComingSoonSaga(action) {
  try {
    const response = yield call(
      comingSoonService.loadComingSoon,
      action.payload
    );
    if (response.status === 200) {
      yield put(comingSoonActions.loadComingSoonSuccessAction(response.data));
    } else {
      yield put(comingSoonActions.loadComingSoonFailAction());
    }
  } catch (error) {
    console.log(error);
    yield put(comingSoonActions.loadComingSoonFailAction());
  }
}

export function* comingSoonWatcherSaga() {
  yield takeLatest(moviesConstant.LOAD_COMING_SOON_LOAD, loadComingSoonSaga);
}
