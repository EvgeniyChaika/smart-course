import Immutable from 'seamless-immutable';
import { logoutUserState } from '../data/initialState';


export const CREATE_USER = '/create/user';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';
export const LOGIN_USER = '/login/user';
export const LOGOUT_USER = '/logout/user';

export function createUserAction(user) {
  return {
    type: CREATE_USER,
    user: Immutable(user),
    activeIndex: 0
  };
}

export function createUserFailAction(error) {
  return {
    type: CREATE_USER_FAIL,
    error
  };
}

export function loginUserAction(loginUser) {
  return {
    type: LOGIN_USER,
    loginUser: Immutable(loginUser)
  };
}

export function logoutUserAction() {
  return {
    type: LOGOUT_USER,
    loginUser: logoutUserState,
    activeIndex: 0
  };
}
