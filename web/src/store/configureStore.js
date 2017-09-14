import 'babel-polyfill';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import combinedReducers from '../reducers/index';
import rootSaga from '../reducers/rootSaga';

export default function configureStore(history) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [routerMiddleware(history), sagaMiddleware];
    const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(...middlewares)));
    sagaMiddleware.run(rootSaga);
    return store;
}
