import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { closeModal } from '../../actions/modal_actions';
import { createMediaPost } from '../../actions/entities/post_actions'

const msp = (state) => {
    const currentUser = state.entities.users[state.session.id];
    return ({
        post: { title: "", content: "", post_type: "photo", author_id: currentUser.id },
        formType: "Post",
        currentUser: currentUser
    })
};

const mdp = (dispatch) => {
    return ({
        action: (post) => dispatch(createMediaPost(post)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(msp, mdp)(PhotoForm)