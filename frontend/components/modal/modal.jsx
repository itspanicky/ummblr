import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

import { CreatePostContainer } from '../posts/create_post_form_container';

const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'Text Form':
            component = <CreatePostContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
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
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(msp, mdp)(Modal);