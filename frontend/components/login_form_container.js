import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import SessionForm from './session_form';

const msp = state => {
    return ({
        errors: state.errors.session,
        formType: "login"
    });
};

const mdp = dispatch => {
    return ({
        processForm: (userForm) => dispatch(login(userForm))
    });
};

export default connect(msp, mdp)(SessionForm);