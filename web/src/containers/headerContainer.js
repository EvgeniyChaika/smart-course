import { connect } from 'react-redux';

import { headerActions } from '../actions/index';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';

function mapStateToProps(state) {
    return {
        activeIndex: state.headerReducer.get('activeIndex')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        activeButton: index => dispatch(headerActions(index))
    };
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);

export default HeaderContainer;
