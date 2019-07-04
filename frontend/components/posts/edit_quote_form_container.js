import { connect } from 'react-redux';
import { updatePost, deletePost } from '../../actions/entities/post_actions';
import QuoteForm from './quote_form';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const postId = ownProps.postId;
    const posts = state.entities.posts
    const post = posts[postId];
    return ({
        post: post,
        currentUser: currentUser,
        formType: "Save",
        posts
    })
}

const mdp = (dispatch) => {
    return ({
        action: (post) => dispatch(updatePost(post)),
        deletePost: (id) => dispatch(deletePost(id)),
        closeModal: () => dispatch(closeModal())
    });
}

export default connect(msp, mdp)(QuoteForm)