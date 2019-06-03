import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import { openModal } from '../../actions/modal_actions';
import { deletePost } from '../../actions/entities/post_actions';

const msp = (state, ownProps) => {
    const post = ownProps.post
    debugger
    const author = state.entities.users[post.author_id]
    // const authorId = ownProps.post.author_id;
    // const author = state.entities.users[authorId];
    return ({
        post: post,
        author: author
    })
}

const mdp = (dispatch) => {
    return ({
        openModal: (modal, postId) => dispatch(openModal(modal, postId)),
        deletePost: (id) => dispatch(deletePost(id))
    })
}

export default connect(msp, mdp)(PostIndexItem)