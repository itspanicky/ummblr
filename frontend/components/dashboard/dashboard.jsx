import React from 'react';
import PostNavContainer from '../post_nav/post_nav_container';
import NavbarContainer from '../navbar/navbar_container';
import PostIndexContainer from '../posts/post_index_container';
import Avatar from '../avatar/avatar';
import Modal from '../modal/modal';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    render() {
        const photoUrl = this.props.currentUser.photoUrl;
        const currentUser = this.props.currentUser;
        const allUsers = this.props.allUsers;
        const follow = this.props.follow;
        let avatar;
        if (this.props.currentUser.photoUrl) {
            avatar = <Avatar photoUrl={photoUrl} currentUser={currentUser.username} />
        } else {
            avatar = <span></span>
        };

        let recommended = allUsers.slice(0, 5).map(user => {
            if (!currentUser.followings.includes(user.id)) {
                return (
                    <li key={user.id}>
                        <div>{user.username}</div>
                        <button className="follow-button" onClick={() => follow(user.id)}><i className="fas fa-plus-square"></i></button>
                    </li>
                )
            }
        })

        return (
            <div className="dashboard-container">
                <Modal />
                <NavbarContainer />
                <div className="dashboard">
                    <section className="dashboard-main">
                        <div>
                            {avatar}
                            <PostNavContainer />
                        </div>
                        <div className="post-index-container">
                            <span></span>
                            <PostIndexContainer />
                        </div>
                    </section>
                    <section className="dashboard-side">
                        <ul> Recommended Blogs
                            {recommended}
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}

export default Dashboard;