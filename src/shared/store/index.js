import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { moviesReducer } from "./reducers/movies.reducer";
import { movieReducer } from "./reducers/movie.reducer";

const reducers = combineReducers({
  movies: moviesReducer,
  moviedetail: movieReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

sagaMiddleware.run(rootSaga);