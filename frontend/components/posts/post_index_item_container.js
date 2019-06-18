import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import { openModal } from '../../actions/modal_actions';
import { deletePost } from '../../actions/entities/post_actions';
import { follow, unfollow, fetchFollows } from '../../actions/entities/follow_actions';
import { fetchPosts } from '../../actions/entities/post_actions';
import { likePost, unlikePost } from '../../actions/entities/like_actions';

const msp = (state, ownProps) => {
    const post = ownProps.post
    // const authorId = ownProps.post.author_id;
    // const author = state.entities.users[authorId];
    const currentUser = state.entities.users[state.session.id];
    const authorId = ownProps.post.author.id;
    // const followings = {};
    let followingStatus = false;
    if (currentUser.followings ) {
        followingStatus = currentUser.followings.includes(authorId)
    }
    // const followings = Object.values(currentUser.followings);
    return ({
        post: post,
        followingStatus: followingStatus,
        authorId: authorId,
        currentUser: currentUser,
        followings: currentUser.followings
    })
}

const mdp = (dispatch) => {
    return ({
        openModal: (modal, postId) => dispatch(openModal(modal, postId)),
        deletePost: (id) => dispatch(deletePost(id)),
        follow: (user) => dispatch(follow(user)),
        unfollow: (user) => dispatch(unfollow(user)),
        fetchPosts: () => dispatch(fetchPosts()),
        // fetchFollows: (userId) => dispatch(fetchFollows(userId)),
        likePost: (postId) => dispatch(likePost(postId)),
        unlikePost: () => dispatch(unlikePost())
    });
}

export default connect(msp, mdp)(PostIndexItem)