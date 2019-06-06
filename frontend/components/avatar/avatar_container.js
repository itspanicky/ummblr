import { connect } from 'react-redux';
import { fetchUser } from '../../actions/entities/user_actions';
import Avatar from './avatar';

const msp = (state, ownProps) => {
    // avatar = ownProps.posts.author.photoUrl?
    return ({

    });
}

const mdp = (dispatch) => {
    return ({
        fetchUser: (id) => dispatch(fetchUser(id))
    });
}

export default connect(msp, mdp)(Avatar)