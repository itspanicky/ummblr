import React from 'react';
import PostNavContainer from '../post_nav/post_nav_container';
import NavbarContainer from '../navbar/navbar_container';
import PostIndexContainer from '../posts/post_index_container';
import Avatar from '../avatar/avatar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const photoUrl = this.props.currentUser.photoUrl;
        const currentUser = this.props.currentUser.username
        let avatar;
        if (this.props.currentUser.photoUrl) {
            avatar = <Avatar photoUrl={photoUrl} currentUser={currentUser} />
        } else {
            avatar = <span></span>
        }
        return (
            <div className="dashboard-container">
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

                    </section>
                </div>
            </div>
        )
    }
}

export default Dashboard;