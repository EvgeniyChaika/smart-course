import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import headerReducer from './modules/headerReducer';
import { createUserReducer, loginUserReducer } from './modules/roleReducer';

const combinedReducers = combineReducers({
    headerReducer,
    createUserReducer,
    loginUserReducer,
    routing: routerReducer
});

export default combinedReducers;
