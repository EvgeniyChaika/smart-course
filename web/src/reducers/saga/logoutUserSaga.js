import { put } from 'redux-saga/effects';

import { headerActions } from '../../actions/index';
import { createUserFailAction } from '../../actions/roleActions';

export function* logoutUserSaga(action) {
  try {
    yield put(headerActions(action.activeIndex));
  } catch (e) {
    yield put(createUserFailAction(e));
  }
}
