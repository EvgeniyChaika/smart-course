import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import headerReducer from './modules/headerReducer';
import { createUserReducer, newUserReducer } from './modules/roleReducer';

const combinedReducers = combineReducers({
    headerReducer,
    createUserReducer,
    routing: routerReducer
});

export default combinedReducers;
