import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePost, deletePost } from '../../actions/entities/post_actions';
import PostForm from './post_form';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const postId = ownProps.postId;
    const posts = state.entities.posts
    const post = posts[postId];
    return ({
        post: post,
        currentUser: currentUser,
        formType: "Save"
    })
}

const mdp = (dispatch) => {
    return ({
        action: (post) => dispatch(updatePost(post)),
        deletePost: (id) => dispatch(deletePost(id)),
        closeModal: () => dispatch(closeModal())
    })
}

export default withRouter(connect(msp, mdp)(PostForm));