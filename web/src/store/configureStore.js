import { combineReducers, createStore } from 'redux';
import headerReducer from '../reducers/headerReducer';
import { routerReducer } from 'react-router-redux';

export default function configureStore() {
    return createStore(
        combineReducers({
            headerReducer,
            routing: routerReducer
        })
    );
}
