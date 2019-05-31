import React from 'react';
import PostButtonsContainer from '../post/post_buttons_container';
import NavbarContainer from '../navbar/navbar_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <NavbarContainer />
                <div className="dashboard">
                    <section className="dashboard-main">
                        <PostButtonsContainer />
                    </section>
                    <section className="dashboard-side">

                    </section>
                </div>
            </>
        )
    }
}

export default Dashboard;