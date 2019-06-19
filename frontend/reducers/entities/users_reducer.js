import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER, RECEIVE_ALL_USERS } from '../../actions/entities/user_actions';
import { merge } from 'lodash';
import { 
    RECEIVE_USER_FOLLOWS, 
    RECEIVE_FOLLOW, 
    REMOVE_FOLLOW 
} from '../../actions/entities/follow_actions';

import { RECEIVE_LIKE ,REMOVE_LIKE } from '../../actions/entities/like_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let key;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            return merge({}, state, { [action.user.user.id]: action.user.user });
        // case RECEIVE_USER_FOLLOWS:
        //     debugger
        //     return state;
            // return merge({}, state, action.follows);
            // return action.follows;
            // return merge({}, state, { "followers": action.follows.followers, "followings": action.follows.followings})
        case RECEIVE_FOLLOW:
            newState = merge({}, state);
            key = action.follow.follower_id;
            newState[key].followings.push(action.follow.following_id);
            // return merge({}, state, { followings: action.follow.following_id});
            return newState;
        case REMOVE_FOLLOW:
            newState = merge({}, state);
            key = action.follow.follower_id;
            const index = newState[key].followings.indexOf(action.follow.following_id);
            // delete newState[1].followings[index];
            newState[key].followings.splice(index, 1);
            return newState;
        // case RECEIVE_LIKE:
        //     newState = merge({}, state);
        //     debugger
        // case REMOVE_LIKE:
        //     debugger
        default:
            return state;
    }
}