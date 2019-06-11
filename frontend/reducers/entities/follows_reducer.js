// import {
//     RECEIVE_ALL_FOLLOWS,
//     RECEIVE_FOLLOW,
//     REMOVE_FOLLOW
// } from '../../actions/entities/follow_actions';

// import { merge } from 'lodash';

// export default (state = {}, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_ALL_FOLLOWS:
//             debugger
//             return merge({}, state, action.follows)
//         case RECEIVE_FOLLOW:
//             debugger
//             const newState = merge({}, state);
//             newState[action.follow.id] = action.follow;
//             return newState;
//         case REMOVE_FOLLOW:
//             debugger
//             return merge({}, state, action.follow)   
//             // newState = merge({}, state);
//             // delete newState[action.follow.id];
//             // return newState;          
//         default:
//             return state;
//     }
// }
