import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER, RECEIVE_ALL_USERS } from '../../actions/entities/user_actions';
import { merge } from 'lodash';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../../actions/entities/follow_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.user.user.id]: action.user.user });
        case RECEIVE_FOLLOW:
        debugger
        return state;
        case REMOVE_FOLLOW:
        debugger
        return state;
        default:
            return state;
    }
}