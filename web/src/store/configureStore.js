import { createStore } from 'redux';
import headerReducer from '../reducers/headerReducer';

export default function configureStore() {
    return createStore(
        headerReducer
    );
}
