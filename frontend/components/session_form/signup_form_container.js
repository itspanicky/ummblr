import { connect } from 'react-redux';
import { signup, clearSessionErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { fetchPosts } from '../../actions/entities/post_actions';

const msp = state => {
    const posts = Object.values(state.entities.posts);
    return ({
        errors: state.errors.session,
        formType: "Sign Up",
        posts
    });
};

const mdp = dispatch => {
    return ({
        processSignup: (userForm) => dispatch(signup(userForm)),
        processLogin: (userForm) => dispatch(login(userForm)),
        clearSessionErrors: (errors) => dispatch(clearSessionErrors(errors)),
        fetchPosts: () => dispatch(fetchPosts()),
    });
};

export default connect(msp, mdp)(SessionForm);