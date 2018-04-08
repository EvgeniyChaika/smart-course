import { createStore } from 'redux';
import headerReducer from '../reducers/modules/headerReducer';

export default function configureStore() {
  return createStore(headerReducer);
}
