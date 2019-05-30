import { connect } from 'react-redux';
import { signup, clearSessionErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => {
    return ({
        errors: state.errors.session,
        formType: "Sign Up"
    });
};

const mdp = dispatch => {
    return ({
        processSingup: (userForm) => dispatch(signup(userForm)),
        processLogin: (userForm) => dispatch(login(userForm)),
        clearSessionErrors: (errors) => dispatch(clearSessionErrors(errors))
    });
};

export default connect(msp, mdp)(SessionForm);