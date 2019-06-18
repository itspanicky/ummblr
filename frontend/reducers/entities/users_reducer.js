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
    let newState;
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
            debugger
            newState[1].followings.push(action.follow.following_id);
            debugger
            // return merge({}, state, { followings: action.follow.following_id});
            return newState;
        case REMOVE_FOLLOW:
            newState = merge({}, state);
            debugger
            const key = action.follow.follower_id;
            const index = newState[key].followings.indexOf(action.follow.following_id);
            // delete newState[1].followings[index];
            newState[key].followings.splice(index, 1)
            debugger
            return newState;
        default:
            return state;
    }
}