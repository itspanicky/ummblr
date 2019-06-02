import React from 'react';
import PostNavContainer from '../post_nav/post_nav_container';
import NavbarContainer from '../navbar/navbar_container';
import PostIndexContainer from '../posts/post_index_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="dashboard-container">
                <NavbarContainer />
                <div className="dashboard">
                    <section className="dashboard-main">
                        <div>
                            <PostNavContainer />
                        </div>
                        <div>
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