import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import PostIndexItem from '../posts/post_index_container';
import ExploreIndexItem from '../explore/explore_index_item';

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

        return (
            <div className="likes-index-container">
                <NavbarContainer />
                <div className="posts-container">
                    <ul>
                        {posts}
                    </ul>
                </div>
            </div>
        )
    }
}

export default LikesIndex;