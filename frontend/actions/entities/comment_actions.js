import * as CommentApiUtil from '../../util/comment_api_util';
import { receivePost } from './post_actions';

export const createComment = (comment) => dispatch => {
    return CommentApiUtil.createComment(comment).then((posts) => {
        return dispatch(receivePost(post));
    });
};

export const fetchComments = (post_id) => dispatch => {
    return CommentApiUtil.fetchComments(post_id).then((post) => {
        return dispatch(receivePost(post));
    })
}