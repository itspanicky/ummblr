import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';


import CreatePostContainer from '../posts/create_post_form_container';
import NavbarContainer from '../navbar/navbar_container';
import CreatePostModalContainer from '../navbar/create_post_modal_container';
import EditPostContainer from '../posts/edit_post_form_container';
import CreatePhotoPostContainer from '../posts/create_photo_form_container';
import EditPhotoPostContainer from '../posts/edit_photo_form_container';
import CreateQuoteContainer from '../posts/create_quote_form_container';
import EditQuoteContainer from '../posts/edit_quote_form_container';
import CreateLinkContainer from '../posts/create_link_form_container';
import EditLinkContainer from '../posts/edit_link_form_container';
import CreateReblogContainer from '../posts/reblog_container';


import Avatar from '../avatar/avatar';

const Modal = ({modal, currentUser, closeModal}) => {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal.modal) {
        case 'Create Text Form':
            component = <CreatePostContainer postType="text" />;
            break;
        case 'Edit Text Form':
            component = <EditPostContainer postId={modal.postId} />;
            break;
        case 'Create Photo Form':
            component = <CreatePhotoPostContainer />
            break;
        case 'Edit Photo Form':
            component = <EditPhotoPostContainer postId={modal.postId} />
            break;
        case 'Create Quote Form':
            component = <CreateQuoteContainer postType="quote" />;
            break;
        case 'Edit Quote Form':
            component = <EditQuoteContainer postId={modal.postId}/>;
            break;
        case 'Create Link Form':
            component = <CreateLinkContainer />
            break;
        case 'Edit Link Form':
            component = <EditLinkContainer postId={modal.postId}/>;
            break;
        case 'alt-create-post':
            component = <CreatePostModalContainer />
            return (
                <div className="modal-background" onClick={() => closeModal()}>
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>
            )
            break;
        case 'Create Reblog':
            component = <CreateReblogContainer postId={modal.postId} />
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {/* <Avatar photoUrl={currentUser.photoUrl} currentUser={currentUser.username} /> */}
                { component }
            </div>
            <div></div>
        </div>
    )
}



const msp = (state) => {
    return ({
        modal: state.ui.modal,
        currentUser: state.entities.users[state.session.id]
    })
}

const mdp = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal()),
    })
}

export default connect(msp, mdp)(Modal);