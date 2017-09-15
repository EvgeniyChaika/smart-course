import { fromJS } from 'immutable';

export const logoutUserState = fromJS({
    authenticated: false,
    user: {}
});

export const initialUserState = fromJS({
    loginUser: {
        authenticated: false,
        user: {}
    }
});

export const initialCreateUserState = fromJS({ user: {} });