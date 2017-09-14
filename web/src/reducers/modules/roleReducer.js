import { fromJS } from 'immutable';

import { CREATE_USER, CREATE_USER_FAIL, LOGIN_USER } from '../../actions/index';

const initialState = fromJS({ user: {} });

export function createUserReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return initialState.set('user', action.user);
        case CREATE_USER_FAIL:
            //TODO
            return initialState.set('user', {});
        default:
            return state;
    }
}

const loginUser = {
    isAuthenticated: false,
    user: {}
};

export function loginUserReducer(state = fromJS({ loginUser }), action) {
    switch (action.type) {
        case LOGIN_USER:
            return state.set('loginUser', action.loginUser);
        default:
            return state;
    }
}
