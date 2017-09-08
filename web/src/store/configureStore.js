import { createStore } from 'redux';

const initialState = {
    activeIndex: 0
};

export default function configureStore() {
    return createStore(
        headerReducer,
        initialState
    );
}

function headerReducer(state, action) {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'ACTIVE_BUTTON':
            return Object.assign(initialState, state, action.activeIndex);
        default:
            return state;
    }
}