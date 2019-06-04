import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { closeModal } from '../../actions/modal_actions';
import { editMediaPost } from '../../actions/entities/post_actions'

const msp = (state, ownProps) => {

    return ({

    })
}

const mdp = (dispatch) => {
    return ({
        action: (post) => dispatch(editMediaPost(post)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(msp, mdp)(PhotoForm)