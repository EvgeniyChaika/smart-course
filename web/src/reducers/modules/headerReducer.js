import { fromJS } from 'immutable';

import { ACTIVE_BUTTON } from '../../actions/index';

const initialState = fromJS({ activeIndex: 0 });

export default function headerReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIVE_BUTTON:
            return initialState.set('activeIndex', action.activeIndex);
        default:
            return state;
    }
}
