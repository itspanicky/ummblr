import * as LikeApiUtil from '../../util/like_api_util';
import { receivePost } from './post_actions';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = (like) => {
    
    return {
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = (like) => {
    
    return {
        type: REMOVE_LIKE,
        like
    }
}

export const likePost = (postId, userId) => (dispatch) => {
    
    return LikeApiUtil.likePost(postId, userId).then((like) => {
        
        return dispatch(receiveLike(like));
    })
}

export const unlikePost = (postId) => (dispatch) => {
    
    return LikeApiUtil.unlikePost(postId).then((like) => {
        
        return dispatch(removeLike(like));
    })
}

// export const likePost = (postId) => (dispatch) => {

//     return LikeApiUtil.likePost(postId).then((post) => {
//         return dispatch(receivePost(post))
//     })
// }

// export const unlikePost = (postId) => (dispatch) => {
//     return LikeApiUtil.unlikePost(postId).then((post) => {
//         return dispatch(receivePost(post))
//     })
// }