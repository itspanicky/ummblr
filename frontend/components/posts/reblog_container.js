import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Reblog from './reblog';
import PostForm from './post_form';
import { createPost } from '../../actions/entities/post_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
        const currentUser = state.entities.users[state.session.id];
        const postId = ownProps.postId;
        const posts = state.entities.posts
        const post = posts[postId];
        let originalPost;
        if (post.reblog_post_id) {
            originalPost = posts[post.reblog_post_id]
            while (originalPost.reblog_post_id) originalPost = posts[originalPost.reblog_post_id]
        }
    return ({
        post: {title: post.title, content: post.content, post_type: post.post_type, author_id: currentUser.id, reblog_post_id: post.id, reblog_description: "", photoUrl: post.photoUrl},
        currentUser,
        formType: "Reblog",
        originalPost
    })
}

const mdp = (dispatch) => {
    return ({
        createPost: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(msp, mdp)(Reblog);