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
    debugger
    return {
        type: RECEIVE_FOLLOW,
        follow: follow
    }
}

const removeFollow = (followingId, followerId) => {
    return {
        type: REMOVE_FOLLOW,
        followingId: followingId,
        followerId: followerId
    }
}

export const fetchFollows = (userId) => (dispatch) => {
    return FollowApiUtil.fetchFollows(userId).then((follows) => {
        return dispatch(receiveAllFollows(follows));
    });
};

// followerId points to currentUserId
export const follow = (followId) => (dispatch) => {
    debugger
    return FollowApiUtil.follow(followId).then((follow) => {
        debugger
        return dispatch(receiveFollow(follow));
    });
}; 

export const unfollow = (userId) => (dispatch) => {
    return FollowApiUtil.unfollow(userId).then((followingId, followerId) => {
        return dispatch(removeFollow(followingId, followerId));
    });
};

