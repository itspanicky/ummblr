import {
    RECEIVE_ALL_FOLLOWS,
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW
} from '../../actions/entities/follow_actions';


import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_FOLLOWS:
            return merge({}, state, action.follows)
        case RECEIVE_FOLLOW:
            debugger
            const newState = merge({}, state);
            newState[action.follow.id] = action.follow;
            // return merge({}, state, action.follow)
            return newState;
        case REMOVE_FOLLOW:
            return merge({}, state, action.follow)
        // case RECEIVE_CURRENT_USER:
        //     debugger
        //     const follows = {};
        //     follows["followers"] = action.user.followers;
        //     follows["followings"] = action.user.followings;
        //     return follows;
            
        default:
            return state;
    }
}
