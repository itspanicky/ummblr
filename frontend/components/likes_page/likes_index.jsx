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
        // let posts = this.props.posts.map(post => {
        //     if (post.likers.includes(currentUser.id)) {
        //         return (
        //             <PostIndexItem
        //                 key={post.id}
        //                 post={post}
        //                 deletePost={this.props.deletePost}
        //                 currentUser={this.props.currentUser}
        //                 follow={this.props.follow}
        //                 unfollow={this.props.unfollow}
        //                 openModal={this.props.openModal}
        //             />
        //         )
        //     }
        // }).reverse();

        let posts = this.props.postLiked.map(post => {
            return (
                <ExploreIndexItem
                    key={post.id}
                    post={post}
                    // deletePost={this.props.deletePost}
                    currentUser={this.props.currentUser}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    // openModal={this.props.openModal}
                    likePost={this.props.likePost}
                    unlikePost={this.props.unlikePost}

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