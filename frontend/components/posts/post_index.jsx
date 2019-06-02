import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item_container';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        let posts = this.props.posts.map(post => {
            return (
                <PostIndexItem
                    key={post.id}
                    post={post}
                    deletePost={this.props.deletePost}
                />
            )
        }).reverse();
        return (
            <div>
                <ul>
                    {posts}
                </ul>
            </div>
        )
    }
}

export default PostIndex;