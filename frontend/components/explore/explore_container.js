import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/entities/post_actions';
import Explore from './explore';

const msp = (state) => {
    const posts = Object.values(state.entities.posts);
    const currentUser = state.entities.users[state.session.id];

    return ({
        posts: posts,
        currentUser: currentUser,
        followings: currentUser.followings
    })
}

const mdp = (dispatch) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts())
    })
}

export default connect(msp, mdp)(Explore);