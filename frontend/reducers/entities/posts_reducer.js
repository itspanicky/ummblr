import { 
    RECEIVE_ALL_POSTS, 
    RECEIVE_POST, 
    REMOVE_POST 
} from '../../actions/entities/post_actions';

import {
    RECEIVE_LIKE,
    REMOVE_LIKE
} from '../../actions/entities/like_actions';

import { merge } from 'lodash';

export default (state = {}, action) => {
    let newState = merge({}, state);
    let liker;
    let post;
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return merge({}, state, action.posts);
        case RECEIVE_POST:
            return merge({}, state, {[action.post.id]: action.post});
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        case RECEIVE_LIKE:
            liker = action.like.user_id;
            post = action.like.post_id;
            newState[post].likers.push(liker);
            return newState;
        case REMOVE_LIKE:
            liker = action.like.user_id;
            post = action.like.post_id;
            const index = newState[post].likers.indexOf(liker);
            newState[post].likers.splice(index);
            return newState;
        default:
            return state;
    }
}