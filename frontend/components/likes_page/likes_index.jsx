import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import ExploreIndexItem from '../explore/explore_index_item';
import AboutMe from '../greeting/about-me';

class LikesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();

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

                />
            )
        });

        if (posts.length === 0) {
            posts = <li className="no-likes">You have no likes!</li>
        }

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