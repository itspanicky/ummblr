import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }

    content(post){
        // const author = post.
        switch (post.post_type) {
            case "text":
                return (
                    <div className="text-post">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                );
        }
    }



    render() {  
        const post = this.props.post;
        return (
            <div className="post-container">
                <div className="post-author-container">
                    {/* {this.props.author.username} */}
                </div>
                <div className="post-body-container">
                    {this.content(post)}
                </div>
                <div className="post-action-container">
                    <span></span>
                    <ul>
                        <li>
                            <ul><button className="settings"><i className="fas fa-cog"></i></button>
                                <li onClick={() => this.props.openModal('Edit Text Form', post.id )}>Edit</li>
                                <li><button onClick={ () => this.props.deletePost(post.id)}>Delete</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PostIndexItem;