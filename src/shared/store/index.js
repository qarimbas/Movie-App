import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { moviesReducer } from "./reducers/movies.reducer";
import { movieReducer } from "./reducers/movie.reducer";
import { actorsReducer } from "./reducers/actors.reducer";
import { searchReducer } from "./reducers/search.reducer";
import { nameReducer } from "./reducers/name.reducer";
import { inTheatersReducer } from "./reducers/intheaters.reducer";
import { comingSoonReducer } from "./reducers/comingsoon.reducer";

const reducers = combineReducers({
  movies: moviesReducer,
  moviedetail: movieReducer,
  actors: actorsReducer,
  searchresult: searchReducer,
  namedetail: nameReducer,
  in_theaters: inTheatersReducer,
  coming_soon: comingSoonReducer,
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
