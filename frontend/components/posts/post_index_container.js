import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/entities/post_actions';
import PostIndex from './post_index';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => {
    const posts = Object.values(state.entities.posts)
    const currentUser = state.entities.users[state.session.id];
    // const followers = Object.values(currentUser.followers);
    // const followings = Object.values(currentUser.followings);
    return ({
        posts: posts,
        currentUser: currentUser

    });
}

const mdp = (dispatch) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        // otherForm: (
        //     <button onClick={() => dispatch(openModal('Text Form'))}></button>
        // )
        deletePost: (id) => dispatch(deletePost(id))
    });
}

export default connect(msp, mdp)(PostIndex)