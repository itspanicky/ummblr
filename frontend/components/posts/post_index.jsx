import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item_container';
import Avatar from '../avatar/avatar';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        this.props.fetchPosts();
        debugger
        this.props.fetchFollows(this.props.currentUser.id);
        debugger
    }

    render() {
        let posts = this.props.posts.map(post => {
            return (
                <PostIndexItem
                    key={post.id}
                    post={post}
                    deletePost={this.props.deletePost}
                    currentUser={this.props.currentUser}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                /> 
            )
        }).reverse();
        return (
            <div className="main-content">
                <ul className="posts-container">
                    {posts}
                </ul>
            </div>
        )
    }
}

export default PostIndex;