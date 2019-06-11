import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER, RECEIVE_ALL_USERS } from '../../actions/entities/user_actions';
import { merge } from 'lodash';
import { 
    RECEIVE_USER_FOLLOWS, 
    RECEIVE_FOLLOW, 
    REMOVE_FOLLOW 
} from '../../actions/entities/follow_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({},state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            return merge({}, state, { [action.user.user.id]: action.user.user });
        case RECEIVE_USER_FOLLOWS:
            debugger
            return merge({}, state, action.follows)
            // return merge({}, state, { "followers": action.follows.follower_id, "followings": action.follows.following_id})
        case RECEIVE_FOLLOW:
            debugger
            newState.followings.push(action.follow.following_id);
            // return merge({}, state, { followings: action.follow.following_id});
            return newState;
        case REMOVE_FOLLOW:
            debugger
            delete newState.followings[action.follow.following_id];
            return newState;
        default:
            return state;
    }
}