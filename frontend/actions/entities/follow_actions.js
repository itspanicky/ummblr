import * as FollowApiUtil from '../../util/follow_api_util';
import { receiveCurrentUser } from '../session_actions';

export const RECEIVE_USER_FOLLOWS = "RECEIVE_USER_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

// edit to take in more arguments
const receiveUserFollows = (userId, follows) => {
    debugger
    return {
        type: RECEIVE_USER_FOLLOWS,
        userId: userId,
        follows: follows
    }
}

const receiveFollow = (follow) => {
    return {
        type: RECEIVE_FOLLOW,
        follow: follow
    }
}

const removeFollow = (follow) => {
    return {
        type: REMOVE_FOLLOW,
        follow: follow
    }
}

export const fetchFollows = (userId) => (dispatch) => {
    debugger
    return FollowApiUtil.fetchFollows(userId).then((follows) => {
        debugger
        return dispatch(receiveUserFollows(userId, follows));
    });
};

// followerId points to currentUserId
export const follow = (followId) => (dispatch) => {
    return FollowApiUtil.follow(followId).then((follow) => {
        return dispatch(receiveFollow(follow));
    });
}; 

export const unfollow = (userId) => (dispatch) => {
    return FollowApiUtil.unfollow(userId).then((follow) => {
        return dispatch(removeFollow(follow));
    });
};


// export const follow = (followId) => (dispatch) => {
//     debugger
//     return FollowApiUtil.follow(followId).then( follows => {
//         debugger
//         return dispatch(receiveUserFollows(followId, follows))
//     })
// }

// export const unfollow = (userId) => (dispatch) => {
//     return FollowApiUtil.unfollow(userId).then( follows => {
//         return dispatch(receiveUserFollows(userId, follows))
//     })
// }