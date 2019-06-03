import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

import CreatePostContainer from '../posts/create_post_form_container';
import EditPostContainer from '../posts/edit_post_form_container';
import CreatePhotoPostContainer from '../posts/create_photo_form_container';


const Modal = ({modal}) => {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal.modal) {
        case 'Create Text Form':
            component = <CreatePostContainer />;
            break;
        case 'Edit Text Form':
            component = <EditPostContainer postId={modal.postId} />;
            break;
        case 'Create Photo Post':
            component = <CreatePhotoPostContainer />
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}



const msp = (state) => {
    return ({
        modal: state.ui.modal
    })
}

const mdp = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal()),
    })
}

export default connect(msp, mdp)(Modal);