import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import PostIndexItem from '../posts/post_index_container';
import ExploreIndexItem from '../explore/explore_index_item_container';
import Avatar from '../avatar/avatar';
import AboutMe from '../greeting/about-me';

class LikesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchAllUsers();

    }

    render() {
        const currentUser = this.props.currentUser;

        let posts = this.props.postLiked.map(post => {
            let originalPost;
            if (post.reblog_post_id) {
                originalPost = this.props.posts[post.reblog_post_id]
                while (originalPost && originalPost.reblog_post_id) originalPost = posts[originalPost.reblog_post_id]
            }
            return (
                <ExploreIndexItem
                    key={post.id}
                    postsArray={this.props.posts}
                    allPosts={this.props.allPosts}
                    post={post}
                    currentUser={this.props.currentUser}
                    originalPost={originalPost}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    likePost={this.props.likePost}
                    unlikePost={this.props.unlikePost}
                    openModal={this.props.openModal}
                    users={this.props.users}

                />
            )
        });

        if (posts.length === 0) {
            posts = <li className="no-likes">You have no likes!</li>
        }

        let allUsers = this.props.allUsers;
        const follow = this.props.follow;
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
                (<ExploreIndexItem
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
                />);
        }

        return (
            <div className="likes-index-container">
                <NavbarContainer />
                <section className="empty-space"></section>
                <section className="empty-space"></section>
                <div className="posts-container">
                    <ul>
                        {posts}
                    </ul>
                </div>
                <section className="dashboard-side">
                    <ul className="recommended-blogs"> <p>Recommended Blogs</p>
                        {recommended}
                    </ul>
                    <br />
                    <br />
                    <ul className="recommended-blogs"> <p>Radar</p>
                        {radarPost}
                    </ul>
                    <AboutMe />
                </section>
                <section className="empty-space"></section>
            </div>
        )
    }
}

export default LikesIndex;