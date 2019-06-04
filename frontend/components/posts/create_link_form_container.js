import { connect } from 'react-redux';
import { createPost } from '../../actions/entities/post_actions';
import LinkForm from './link_form';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    return ({
        post: { title: "", content: "", post_type: "link", author_id: currentUser.id },
        // how to add in type and author_id? -- maybe in state
        formType: "Post",
        currentUser: currentUser
    });
}

const mdp = (dispatch) => {
    return ({
        action: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    });
}

export default connect(msp, mdp)(LinkForm)