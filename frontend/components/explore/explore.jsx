import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import PostIndexItem from '../posts/post_index_item_container';
import ExploreIndexItem from './explore_index_item';

class Explore extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        let posts = this.props.posts.map(post => {
            if (!this.props.currentUser) {
                return (
                    <ExploreIndexItem
                        key={post.id}
                        post={post}
                    />
                )
            } else if (post.author_id != this.props.currentUser.id) {
                return (
                    <ExploreIndexItem
                        key={post.id}
                        post={post}
                        deletePost={this.props.deletePost}
                        currentUser={this.props.currentUser}
                        followingStatus={this.props.followingStatus}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        likePost={this.props.likePost}
                        unlikePost={this.props.unlikePost}
                    />
                ) 
            }
        }).reverse();
        // const col = Math.floor(posts.length / 4);
        // const postsA = posts.slice(0, col);
        // const postsB = posts.slice(col, 2 * col );
        // const postsC = posts.slice(2 * col, 3* col);
        // const postsD = posts.slice(3 * col, posts.length);

        return (
            <>
                <NavbarContainer />
                <div className="explore-container">
                    <ul className="explore-posts">
                        {posts}
                    </ul>
                    {/* <ul className="explore-posts A">
                        {postsA}
                    </ul>
                    <ul className="explore-posts B">
                        {postsB}
                    </ul>
                    <ul className="explore-posts C">
                        {postsC}
                    </ul>
                    <ul className="explore-posts D">
                        {postsD}
                    </ul> */}
                </div>
            </>
            
        )
    }
}

export default Explore;