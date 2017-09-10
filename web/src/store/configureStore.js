import { createStore } from 'redux';

export default function configureStore() {
    return createStore(
        headerReducer
    );
}

function headerReducer(state = {activeIndex: 0}, action) {
    switch (action.type) {
        case 'ACTIVE_BUTTON':
            return Object.assign({}, state, {activeIndex: action.activeIndex});
        default:
            return state;
    }
}