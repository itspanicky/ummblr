import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { closeModal } from '../../actions/modal_actions';
import { editMediaPost } from '../../actions/entities/post_actions'

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
        post: post,
        currentUser: currentUser,
        formType: "Save",
        originalPost
    })
}

const mdp = (dispatch) => {
    return ({
        action: (formData, post) => dispatch(editMediaPost(formData, post)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(msp, mdp)(PhotoForm)