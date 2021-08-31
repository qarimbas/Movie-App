import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import {moviesReducer} from "./reducers/movies.reducer";

const reducers = combineReducers({
    movies: moviesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
));

sagaMiddleware.run(rootSaga);
