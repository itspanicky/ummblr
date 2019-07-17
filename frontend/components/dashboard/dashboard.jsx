import React from 'react';
import PostNavContainer from '../post_nav/post_nav_container';
import NavbarContainer from '../navbar/navbar_container';
import PostIndexContainer from '../posts/post_index_container';
import Avatar from '../avatar/avatar';
import AboutMe from '../greeting/about-me';
import ExploreIndexItem from '../explore/explore_index_item'
import UserMini from '../avatar/user-mini';
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
        if (currentUser.photoUrl) {
            avatar = <Avatar 
                klass={"post-avatar"} 
                photoUrl={photoUrl} 
                user={currentUser}
                currentUser={currentUser}
                 />
        } 
        else {
            avatar = <img className="post-avatar" src={window.brentURL}></img>
        };

        let recommended = allUsers.slice(0, 7).map(user => {
            if (!currentUser.followings.includes(user.id) && user.id != currentUser.id) {
                let otherAvatar;
                if (user.photoUrl) {
                    otherAvatar = <Avatar klass={"other-avatar"} photoUrl={user.photoUrl} user={user.username} />
                } else {
                    otherAvatar = <img className="other-avatar" src={window.brentURL}></img>
                }
                return (
                    <li key={user.id} className="recommended-users">
                        <div>
                            {otherAvatar}
                            <div>{user.username}</div>
                        </div>
                        <button className="follow-button" onClick={() => follow(user.id)}><i className="fas fa-plus-square"></i></button>
                    </li>
                )
            }
        });

        let radarPosts = this.props.radarPosts;
        let radar = <span></span>;
        let originalPost = <span></span>; 
        let radarPost = <span></span>;
        if (radarPosts.length > 0) {
            radar = radarPosts[0];
            if (radar.reblog_post_id) {
                while (radar.reblog_post_id) {
                    radar = this.props.allPosts[radar.reblog_post_id]
                }
                originalPost = this.props.allPosts[radar.reblog_post_id]
            }
            radarPost = 
                ( <ExploreIndexItem
                    key={radar.id}
                    postsArray={this.props.posts}
                    post={radar}
                    originalPost={originalPost}
                    currentUser={this.props.currentUser}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    likePost={this.props.likePost}
                    unlikePost={this.props.unlikePost}
                    openModal={this.props.openModal}
                    users={this.props.users}
                /> );
        }
        
            

        
        return (
            <div className="dashboard-container">
                <NavbarContainer />
                <div className="dashboard">
                    <section className="empty-space"></section>
                    <section className="dashboard-main">
                        <div className="post-nav-container">
                            {avatar}
                            <PostNavContainer />
                        </div>
                        <div className="post-index-container">
                            <PostIndexContainer />
                        </div>
                    </section>
                    <section className="dashboard-side">
                        <ul className="recommended-blogs"> <p>Recommended Blogs</p>
                            {recommended}
                        </ul>
                        <br/>
                        <br/>
                        <ul className="recommended-blogs"> <p>Radar</p>
                            {radarPost}
                        </ul>
                        <AboutMe />
                    </section>
                    <section className="empty-space"></section>
                </div>
            </div>
        )
    }
}

export default Dashboard;