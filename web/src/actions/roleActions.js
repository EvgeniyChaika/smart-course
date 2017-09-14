import { fromJS } from 'immutable';

export const CREATE_USER = '/create/user';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';
export const LOGIN_USER = '/login/user';

export function createUserAction(user) {
    return {
        type: CREATE_USER,
        user: fromJS(user)
    };
}

export function createUserFailAction(error) {
    return {
        type: CREATE_USER_FAIL,
        error
    };
}

export function loginUserAction(user) {
    return {
        type: LOGIN_USER,
        user: fromJS(user)
    };
}
