import { connect } from 'react-redux';
import { createComment } from '../../actions/entities/comment_actions';
import CommentForm from './comment_form';
import { receiveCurrentUser } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const postId = ownProps.postId;
    const closeCommentForm = ownProps.closeCommentForm
    return ({
        comment: {body: "", post_id: postId, author_id: currentUser.id},
        closeCommentForm
    });
}

const mdp = (dispatch) => {
    return ({
        createComment: (comment) => dispatch(createComment(comment))
    });
}

export default connect(msp, mdp)(CommentForm)