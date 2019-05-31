import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(msp, mdp)(Dashboard);
