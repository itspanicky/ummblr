import { connect } from 'react-redux';
import CreatePostModal from './create_post_modal';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state) => {
    // return {
    //     currentUser: state.entities.users[state.session.id]
    // }
}

const mdp = (dispatch) => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(null, mdp)(CreatePostModal)