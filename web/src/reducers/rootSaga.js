import { takeEvery } from 'redux-saga/effects';

import { CREATE_USER } from '../actions/index';

import { createUserSaga } from './saga/createUserSaga';


export default function* rootSaga() {
    yield [takeEvery(CREATE_USER, createUserSaga),
    ];
}
