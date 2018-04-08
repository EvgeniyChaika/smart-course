import { ACTIVE_BUTTON } from '../../actions/index';

export default function headerReducer(state = { activeIndex: 0 }, action) {
  switch (action.type) {
    case ACTIVE_BUTTON:
      return Object.assign({}, state, { activeIndex: action.activeIndex });
    default:
      return state;
  }
}
