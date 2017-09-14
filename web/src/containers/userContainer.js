import { connect } from 'react-redux';

import { createUserAction } from '../actions/index';
import SignUp from '../components/SignUp/SignUp';

function mapStateToProps(state) {
    return {
        user: state.createUserReducer.get('user')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createUser: user => dispatch(createUserAction(user))
    };
}

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;
