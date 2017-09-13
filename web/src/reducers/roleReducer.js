import { fromJS } from 'immutable';

import { CREATE_USER } from '../actions/index';

const initialState = fromJS({isAuthenticated : false, id: 0, nickName: ''});

export default function roleReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return initialState.set('name', action.name);
        default:
            return state;
    }
}

