import { CREATE_USER, CREATE_USER_FAIL, LOGIN_USER, LOGOUT_USER } from '../../actions/index';
import { initialCreateUserState, initialUserState } from '../../data/initialState';

export function createUserReducer(state = initialCreateUserState, action) {
    switch (action.type) {
        case CREATE_USER:
            return state.set('user', action.user);
        case CREATE_USER_FAIL:
            //TODO
            return state.set('user', initialCreateUserState);
        default:
            return state;
    }
}

export function loginUserReducer(state = initialUserState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return state.set('loginUser', action.loginUser);
        case LOGOUT_USER:
            return state.set('loginUser', action.loginUser);
        default:
            return state;
    }
}
