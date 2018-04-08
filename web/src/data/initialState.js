import Immutable from 'seamless-immutable';

export const logoutUserState = Immutable({
  authenticated: false,
  user: {}
});

export const initialUserState = Immutable({
  loginUser: {
    authenticated: false,
    user: {}
  }
});

export const initialCreateUserState = Immutable({ user: {} });
