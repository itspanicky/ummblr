import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
import { fetchAllUsers } from '../../actions/entities/user_actions';
import { follow } from '../../actions/entities/follow_actions';

const msp = (state) => {
    // followings = currentUser.followings;
    return {
        currentUser: state.entities.users[state.session.id],
        allUsers: Object.values(state.entities.users)
    };
};

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        follow: (followId) => dispatch(follow(followId))
    };
};

export default connect(msp, mdp)(Dashboard);
