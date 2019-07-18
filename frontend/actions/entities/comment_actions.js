import * as CommentApiUtil from '../../util/comment_api_util';
import { receivePost } from './post_actions';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"

const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

export const createComment = (comment) => dispatch => {
    return CommentApiUtil.createComment(comment).then((comment) => {
        return dispatch(receiveComment(comment));
    });
};

export const fetchComments = (post_id) => dispatch => {
    return CommentApiUtil.fetchComments(post_id).then((post) => {
        return dispatch(receivePost(post));
    })
}