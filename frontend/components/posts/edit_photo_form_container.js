import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { closeModal } from '../../actions/modal_actions';
import { editMediaPost } from '../../actions/entities/post_actions'

const msp = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const postId = ownProps.postId;
    const posts = state.entities.posts
    const post = posts[postId];
    return ({
        post: post,
        currentUser: currentUser,
        formType: "Save"
    })
}

const mdp = (dispatch) => {
    return ({
        action: (post) => dispatch(editMediaPost(post)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(msp, mdp)(PhotoForm)