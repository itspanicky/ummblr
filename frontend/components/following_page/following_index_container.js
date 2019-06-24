import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/entities/user_actions'
import { unfollow } from '../../actions/entities/follow_actions';
import FollowingIndex from './following_index'

const msp = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        allUsers: Object.values(state.entities.users)
    })
}

const mdp = (dispatch) => {
    return ({
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        unfollow: (user) => dispatch(unfollow(user))
    })
}

export default connect(msp, mdp)(FollowingIndex);