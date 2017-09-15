import { put } from 'redux-saga/effects';

import Http from '../../httpClient';
import { createUserFailAction, loginUserAction } from '../../actions/index';
import { headerActions } from '../../actions/headerActions';

export function* createUserSaga(action) {
    try {
        const loginUser = yield Http.post('/course/create/user', {
            data: action.user,
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(loginUser);
        yield put(loginUserAction(loginUser));
        yield put(headerActions(action.activeIndex));   //TODO
    } catch (e) {
        yield put(createUserFailAction(e));
    }
}
