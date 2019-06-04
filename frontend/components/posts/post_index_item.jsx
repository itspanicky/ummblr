import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu:  false
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu)
        });
    }

    closeMenu(e) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });  
        }
    }

    postBody(post){
        switch (post.post_type) {
            case "text":
                return (
                    <div className="text-post">
                        <h3>{post.title}</h3>
                        <p className = "content-post">{post.content}</p>
                    </div>
                );
            case "photo":
                return (
                    <div>
                        <img className="photo-post" src={post.photoUrl} />
                        <p className="content-post">{post.content}</p>
                    </div>
                )
        }
    }

    render() {  
        const post = this.props.post;
        // const author = this.props.author.username;
        return (
            <div className="post-container">
                <div className="post-author-container">
                    {/* {author} */}
                </div>
                <div className="post-body-container">
                    {this.postBody(post)}
                </div>
                <div className="post-action-container">
                    <span></span>
                    <ul>
                        <li>
                            <button className="settings-button" onClick={this.showMenu}>
                                <i className="fas fa-cog"></i>
                            </button>

                            { this.state.showMenu
                                ? (
                                    <div className="settings-dropdown" ref={(element) => { this.dropdownMenu = element;}}>
                                        <button onClick={() => this.props.openModal('Edit Text Form', post.id)}>Edit</button>
                                        <button button onClick={() => this.props.deletePost(post.id)}>Delete</button>
                                    </div>
                                )
                                : (null)
                            }
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PostIndexItem;