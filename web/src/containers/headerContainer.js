import { connect } from 'react-redux';

import { headerActions, logoutUserAction } from '../actions/index';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';

function mapStateToProps(state) {
    return {
        activeIndex: state.headerReducer.get('activeIndex'),
        isAuthenticated: state.loginUserReducer.getIn(['loginUser', 'authenticated'])
    };
}

function mapDispatchToProps(dispatch) {
    return {
        activeButton: index => dispatch(headerActions(index)),
        logoutUser: () => dispatch(logoutUserAction())
    };
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);

export default HeaderContainer;
