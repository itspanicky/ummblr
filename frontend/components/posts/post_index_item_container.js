import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';

const msp = (state, ownProps) => {
    const post = ownProps.post
    const author = state.entities.users[post.author_id]
    // const authorId = ownProps.post.author_id;
    // const author = state.entities.users[authorId];
    return ({
        post: post,
        author: author
    })
}

const mdp = (dispatch) => {
    return ({

    })
}

export default connect(msp, mdp)(PostIndexItem)