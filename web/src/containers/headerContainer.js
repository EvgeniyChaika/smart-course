import { connect } from 'react-redux';

import headerActions from '../actions/headerActions';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';

function mapStateToProps(state) {
    console.log(state);
    return {
        activeIndex: state.activeIndex
    };
}

function mapDispatchToProps(dispatch) {
    return {
        activeButton: index => dispatch(headerActions(index))
    };
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);

export default HeaderContainer;
