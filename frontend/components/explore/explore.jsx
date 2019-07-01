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

        let posts = null;
        let allPosts = this.props.posts;
        let allPostsIds = this.props.allPosts;
        let colOne;
        let colTwo;
        let colThree;
        let colFour;
        if (allPosts.length > 0) {
            posts=[];
            let col1 = [];
            let col2 = [];
            let col3 = [];
            let col4 = [];
            for (let i = 0; i < allPosts.length; i++) {
                let temp = i % 4;
                if (temp === 0) {
                    col1.push(allPosts[i]);
                } else if (temp === 1) {
                    col2.push(allPosts[i]);
                } else if (temp === 2) {
                    col3.push(allPosts[i]);
                } else {
                    col4.push(allPosts[i]);
                }
            }

            colOne = col1.map(post => {
                let originalPost = post.reblog_post_id ? allPostsIds[post.reblog_post_id] : <span></span>;
                
                if (post.author_id != this.props.currentUser.id) {
                    return (
                        <ExploreIndexItem
                            key={post.id}
                            post={post}
                            originalPost={originalPost}
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
            });

            colTwo = col2.map(post => {
                const originalPost = post.reblog_post_id ? allPostsIds[post.reblog_post_id] : <span></span>;
                if (post.author_id != this.props.currentUser.id) {
                    return (
                        <ExploreIndexItem
                            key={post.id}
                            post={post}
                            originalPost={originalPost}
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
            });

            colThree = col3.map(post => {
                const originalPost = post.reblog_post_id ? allPostsIds[post.reblog_post_id] : <span></span>;
                debugger
                if (post.author_id != this.props.currentUser.id) {
                    return (
                        <ExploreIndexItem
                            key={post.id}
                            post={post}
                            originalPost={originalPost}
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
            });

            colFour = col4.map(post => {
                const originalPost = post.reblog_post_id ? allPostsIds[post.reblog_post_id] : <span></span>;
                
                if (post.author_id != this.props.currentUser.id) {
                    return (
                        <ExploreIndexItem
                            key={post.id}
                            post={post}
                            originalPost={originalPost}
                            deletePost={this.props.deletePost}
                            currentUser={this.props.currentUser}
                            followingStatus={this.props.followingStatus}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            likePost={this.props.likePost}
                            unlikePost={this.props.unlikePost}
                            openModal={this.props.openModal}
                        />
                    )
                }
            });

        }

        return (
            <>
                <NavbarContainer />
                <div className="explore-container">
                    {/* <ul className="explore-posts">
                        {posts}
                    </ul> */}
                    <ul className="col col-1">
                        {colOne}
                    </ul>
                    <ul className="col col-2">
                        {colTwo}
                    </ul>
                    <ul className="col col-3">
                        {colThree}
                    </ul>
                    <ul className="col col-4">
                        {colFour}
                    </ul>
                </div>
            </>
            
        )
    }
}

export default Explore;