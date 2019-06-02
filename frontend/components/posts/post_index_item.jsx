import React from 'react';

class PostIndexItem extends React.Component {
    
    content(post){
        // const author = post.
        switch (post.post_type) {
            case "text":
                return (
                    <div className="text-post">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                );
        }
    }

    render() {  
        const post = this.props.post;
        return (
            <div className="post-container">
                <div className="post-author-container">
                    
                </div>
                <div className="post-body-container">
                    {this.content(post)}
                </div>
                <div className="post-action-container">

                </div>
            </div>
        )
    }
}

export default PostIndexItem;