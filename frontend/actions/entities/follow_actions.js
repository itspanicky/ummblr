import * as FollowApiUtil from '../../util/follow_api_util';

export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

// edit to take in more arguments
const receive_all_follows = (follows) => {
    return {
        type: RECEIVE_ALL_FOLLOWS,
        follows: follows
    }
}

const receive_follow = (follow) => {
    return {
        type: RECEIVE_FOLLOW,
        follow: follow
    }
}

const remove_follow = () => {
    return {
        type: REMOVE_FOLLOW,
    }
}

export const fetchFollows = (userId) => (dispatch) => {
    return FollowApiUtil.fetchFollows(userId).then((follows) => {
        return dispatch(receive_all_follows(follows));
    });
};

export const follow = (user) => (dispatch) => {
    return FollowApiUtil.follow(user).then((follow) => {
        return dispatch(receive_follow(follow));
    });
}; 

export const unfollow = (userId) => (dispatch) => {
    return FollowApiUtil.unfollow(userId).then(() => {
        return dispatch(remove_follow());
    });
};

