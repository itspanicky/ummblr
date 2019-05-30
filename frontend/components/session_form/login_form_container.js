import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => {
    return ({
        errors: state.errors.session,
        formType: "Log In"
    });
};

const mdp = dispatch => {
    return ({
        processForm: (userForm) => dispatch(login(userForm)),
        clearSessionErrors: (errors) => dispatch(clearSessionErrors(errors))
    });
};

export default connect(msp, mdp)(SessionForm);