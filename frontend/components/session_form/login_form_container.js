import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { fetchPosts, fetchPost } from '../../actions/entities/post_actions';
const msp = state => {
    const posts = Object.values(state.entities.posts);
    return ({
        errors: state.errors.session,
        formType: "Log In",
        posts
    });
};

const mdp = dispatch => {
    return ({
        processLogin: (userForm) => dispatch(login(userForm)),
        clearSessionErrors: (errors) => dispatch(clearSessionErrors(errors)),
        fetchPosts: () => dispatch(fetchPosts()),
        fetchPost: () => dispatch(fetchPost())
    });
};

export default connect(msp, mdp)(SessionForm);