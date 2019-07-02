import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/entities/post_actions';
import { likePost, unlikePost } from '../../actions/entities/like_actions';
import LikesIndex from './likes_index';
import { openModal } from '../../actions/modal_actions';
import { follow, unfollow } from '../../actions/entities/follow_actions';

const msp = (state) => {
    const posts = Object.values(state.entities.posts);
    const currentUser = state.entities.users[state.session.id];
    const postLiked = posts.filter(post => {
        if (post.likers.includes(currentUser.id)) return post
    })
    return ({
        posts: posts,
        currentUser: currentUser,
        postLiked: postLiked
    });
}

const mdp = (dispatch) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        follow: (user) => dispatch(follow(user)),
        unfollow: (user) => dispatch(unfollow(user)),
        likePost: (postId, userId) => dispatch(likePost(postId, userId)),
        unlikePost: (postId) => dispatch(unlikePost(postId)),
        openModal: (modal, postId) => dispatch(openModal(modal, postId)),
    });
}

export default connect(msp, mdp)(LikesIndex)