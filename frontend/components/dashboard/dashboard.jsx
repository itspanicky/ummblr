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
        return (
            <div className="dashboard-container">
                <NavbarContainer />
                <div className="dashboard">
                    <section className="dashboard-main">
                        <div>
                            <Avatar photoUrl={photoUrl} className="avatar" />
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