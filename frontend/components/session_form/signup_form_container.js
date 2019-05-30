import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => {
    return ({
        errors: state.errors.session,
        formType: "Sign Up"
    });
};

const mdp = dispatch => {
    return ({
        processForm: (userForm) => dispatch(signup(userForm)),
        clearSessionErrors: (errors) => dispatch(clearSessionErrors(errors))
    });
};

export default connect(msp, mdp)(SessionForm);