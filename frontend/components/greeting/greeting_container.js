import { connect } from 'react-redux';
import { fetchPosts} from '../../actions/entities/post_actions';
import Greeting from './greeting';

const msp = (state) => {
    const posts = Object.values(state.entities.posts);
    return {
        posts
    };
};

const mdp = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    };
};

export default connect(msp, mdp)(Greeting);