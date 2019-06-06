import * as FollowApiUtil from '../../util/follow_api_util';

export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

// edit to take in more arguments
const receiveAllFollows = (follows) => {
    return {
        type: RECEIVE_ALL_FOLLOWS,
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
    return FollowApiUtil.fetchFollows(userId).then((follows) => {
        return dispatch(receiveAllFollows(follows));
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
//     return FollowApiUtil.follow(followId).then( user => {
//         return dispatch(receiveUser(user))
//     })
// }