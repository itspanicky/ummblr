// import { 
//     RECEIVE_LIKE, 
//     REMOVE_LIKE 
// } from '../../actions/entities/like_actions';

// import { merge } from 'lodash';

// export default (state = {}, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_LIKE:
//             debugger
//             return merge({}, state, action.like)
//         case REMOVE_LIKE:
//             debugger
//             let newState = merge({}, state);
//             delete newState[action.id]
//             return newState;
//         default:
//             return state;
//     }
// }