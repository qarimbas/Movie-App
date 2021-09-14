import { call, put, takeLatest } from "redux-saga/effects";
import { moviesConstant } from "../constants/movies.constant";
import searchService from "./../../services/search.service";
import { searchActions } from "../actions/search.actions";

function* loadSearchSaga(action) {
  try {
    const response = yield call(searchService.loadSearch, action.payload);
    console.log("response", response);
    if (response.status === 200) {
      yield put(searchActions.loadSearchSuccessAction(response.data.results));
    } else {
      yield put(searchActions.loadSearchFailAction());
    }
  } catch (error) {
    console.log(error);
    yield put(searchActions.loadSearchFailAction());
  }
}

export function* searchWatcherSaga() {
  yield takeLatest(moviesConstant.LOAD_SEARCH_LOAD, loadSearchSaga);
}
