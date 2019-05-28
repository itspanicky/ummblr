import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

// keep track of any error messages involved with the signup/login page

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            const newState = state.concat([action.errors]);
            return newState;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
};