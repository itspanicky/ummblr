import { connect } from 'react-redux';
import PostNav from './post_nav';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch) => {
    return {
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(msp, mdp)(PostNav)