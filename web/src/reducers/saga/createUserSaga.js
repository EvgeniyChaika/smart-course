import { put } from 'redux-saga/effects';

import Http from '../../httpClient';
import { createUserFailAction, loginUserAction } from '../../actions/index';

export function* createUserSaga(action) {
    try {
        const user = yield Http.post('/course/create/user', {
            data: action.user,
            headers: { 'Content-Type': 'application/json' }
        });
        //TODO
        // yield put(loginUserAction(user));
    } catch (e) {
        yield put(createUserFailAction(e));
    }
}
