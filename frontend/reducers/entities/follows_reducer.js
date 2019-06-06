import {
    RECEIVE_ALL_FOLLOWS,
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW
} from '../../actions/entities/follow_actions';

import { merge } from 'lodash';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_FOLLOWS:
            return merge({}, state, action.follows)
        case RECEIVE_FOLLOW:
            let newState = merge({}, state);
            delete newState[action.followingId];
            return newState;
        case REMOVE_FOLLOW:
            return state;
        default:
            return state;
    }
}
