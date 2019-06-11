import * as LikeApiUtil from '../../util/like_api_util';
import { receivePost } from './post_actions';

// export const RECEIVE_LIKE = "RECEIVE_LIKE";
// export const REMOVE_LIKE = "REMOVE_LIKE";

// const receiveLike = (like) => {
//     return {
//         type: RECEIVE_LIKE,
//         like
//     }
// }

// const removeLike = (id) => {
//     return {
//         type: REMOVE_LIKE,
//         likeId: id
//     }
// }

// export const likePost = (postId) => (dispatch) => {
//     return LikeApiUtil.likePost(postId).then((like) => {
//         return dispatch(receiveLike(like));
//     })
// }

// export const unlikePost = ({postId, likeId}) => (dispatch) => {
//     return LikeApiUtil.unlikePost({postId, likeId}).then(() => {
//         return dispatch(removeLike(id));
//     })
// }

export const likePost = (postId) => (dispatch) => {
    debugger
    return LikeApiUtil.likePost(postId).then((post) => {
        debugger
        return dispatch(receivePost(post))
    })
}

export const unlikePost = (postId) => (dispatch) => {
    return LikeApiUtil.unlikePost(postId).then((post) => {
        return dispatch(receivePost(post))
    })
}