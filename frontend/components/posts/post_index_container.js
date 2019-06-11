import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/entities/post_actions';
import PostIndex from './post_index';
import { follow, unfollow, fetchFollows } from '../../actions/entities/follow_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => {
    const posts = Object.values(state.entities.posts)
    const currentUser = state.entities.users[state.session.id];
    // const followers = Object.values(currentUser.followers);
    // const followings = Object.values(currentUser.followings);
    return ({
        posts: posts,
        currentUser: currentUser,
        followings: currentUser.followings
    });
}

const mdp = (dispatch) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        // otherForm: (
        //     <button onClick={() => dispatch(openModal('Text Form'))}></button>
        // )
        deletePost: (id) => dispatch(deletePost(id)),
        // follow: (user) => dispatch(follow(user)),
        // unfollow: (user) => dispatch(unfollow(user)),
        fetchFollows: (userId) => dispatch(fetchFollows(userId))
    });
}

export default connect(msp, mdp)(PostIndex)