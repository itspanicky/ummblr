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
                    />
                ) 
            }
        }).reverse();

        return (
            <>
                <NavbarContainer />
                <div className="explore-container">
                    <ul className="explore-posts">
                        {posts}
                    </ul>
                </div>
            </>
            
        )
    }
}

export default Explore;