import { connect } from 'react-redux';
import { updatePost, deletePost } from '../../actions/entities/post_actions';
import PostForm from './post_form';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    const postId = ownProps.match.params.postId;
    const post = state.posts[postId];
    return ({
        post: post
    })
}

const mdp = (dispatch) => {
    return ({
        action: (post) => dispatch(updatePost(post)),
        deletePost: (id) => dispatch(deletePost(id))
    })
}

export default connect(msp, mdp)(PostForm)