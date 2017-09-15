import { takeEvery } from 'redux-saga/effects';

import { CREATE_USER,LOGOUT_USER } from '../actions/index';

import { createUserSaga } from './saga/createUserSaga';
import { logoutUserSaga } from './saga/logoutUserSaga';


export default function* rootSaga() {
    yield [
        takeEvery(CREATE_USER, createUserSaga),
        takeEvery(LOGOUT_USER, logoutUserSaga),
    ];
}
