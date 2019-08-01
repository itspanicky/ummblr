import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import Avatar from '../avatar/avatar';

class FollowingIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    render() {
        const currentUser = this.props.currentUser;
        const allUsers = this.props.allUsers;
        const unfollow = this.props.unfollow;
        let followLength = 0;
        let following = allUsers.map(user => {
            if (currentUser.followings.includes(user.id)) {
                const photoUrl = user.photoUrl ? 
                    <Avatar photoUrl={user.photoUrl} klass={"other-avatar"} /> :
                    <img className="other-avatar" src={window.brentURL}></img> ;
                followLength += 1;

                return (
                    <li key={user.id} className="following-user">
                        <div className="following-user-user">
                            {photoUrl}
                            {user.username}
                        </div>
                        
                        <button className="following follow-button" onClick={() => unfollow(user.id)}>Unfollow</button>
                    </li>
                )
            }
        })
        return (
            <>
                <NavbarContainer />
                <div className="following-index-container"><h3 className="following-length">{`Following ${followLength} Blogs`}</h3>
                    <ul className="following-index-list">
                        {following}
                    </ul>
                </div>
            </>
            
        )
    }
}

export default FollowingIndex;