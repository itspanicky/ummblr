import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/entities/post_actions';
import Explore from './explore';
import { follow, unfollow } from '../../actions/entities/follow_actions';
import { likePost, unlikePost } from '../../actions/entities/like_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => {
    const posts = Object.values(state.entities.posts);
    const allPosts = state.entities.posts;
    const currentUser = state.entities.users[state.session.id];
    return ({
        posts: posts,
        allPosts,
        currentUser: currentUser,
    })
}

const mdp = (dispatch) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        follow: (user) => dispatch(follow(user)),
        unfollow: (user) => dispatch(unfollow(user)),
        likePost: (postId, userId) => dispatch(likePost(postId, userId)),
        unlikePost: (postId) => dispatch(unlikePost(postId)),
        openModal: (modal, postId) => dispatch(openModal(modal, postId))
    })
}

export default connect(msp, mdp)(Explore);