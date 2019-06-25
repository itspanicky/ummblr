import React from 'react';
import Avatar from '../avatar/avatar';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu:  false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
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
            case "quote":
                return (
                    <div className="quote-post">
                        <h3>&ldquo;{post.title}&rdquo;</h3>
                        <p className="content-post"><span>-</span> {post.content}</p>
                    </div>
                )
            case "link":
                let link;
                if (post.title.includes("https://")) {
                    link = post.title
                } else {
                    link = "http://" + post.title;
                }

                return (
                    <div className="text-post">
                        <h3 className="link-post"><a  href={link}>{post.title}</a></h3>
                        <p className="content-post">{post.content}</p>
                    </div>
                )
        }
    }

    postSetting(post){
        switch (post.post_type) {
            case "text":
                return (
                    <button onClick={() => this.props.openModal('Edit Text Form', post.id)}>Edit</button>
                )
            case "photo":
                return (
                    <button onClick={() => this.props.openModal('Edit Photo Form', post.id)}>Edit</button>
                )
            case "quote":
                return (
                    <button onClick={() => this.props.openModal('Edit Quote Form', post.id)}>Edit</button>
                )
            case "link":
                return (
                    <button onClick={() => this.props.openModal('Edit Link Form', post.id)}>Edit</button>
                )
        }
    }

    handleFollow(e) {
        e.preventDefault();
        if (this.props.followingStatus === false) {
            this.props.follow(this.props.post.author.id);
        } else {
            this.props.unfollow(this.props.post.author.id);
        }
    }

    render() {  
        const post = this.props.post;
        const author = this.props.post.author;
        const currentUser = this.props.currentUser;
        let followText = this.props.followingStatus ? "Unfollow" : "Follow"
        
        let follow;
        if (this.props.post.author.username === this.props.currentUser.username) {
            follow = <span></span>
        } else if (this.props.followingStatus === false) {
            follow = <button className="follow-button" onClick={this.handleFollow}>{followText}</ button>
        } else {
            follow = <button className="follow-button" onClick={this.handleFollow}>{followText}</ button>
        };

        let likeBtn = !post.likers.includes(currentUser.id) ? 
            <button className="like-btn" onClick={() => this.props.likePost(post.id, currentUser.id)}>
                <i className="fas fa-heart unclicked"></i>
            </button>
            :
            <button onClick={() => this.props.unlikePost(post.id)}>
                <i className="fas fa-heart clicked"></i>
            </button> ;
        

        let notes = <div></div>;
        let likers = post.likers.length;
        if (likers > 0) {
            notes = (
                <div>
                    <ul>{`${likers} ${likers === 1 ? "note" : "notes"}`}
                    <li className="notes-dropdown">
                    </li>
                    </ul>
                </div>
            )
        } 
        


        let settings;
        if (this.props.currentUser.id === this.props.authorId) {
            settings = (
                <li>
                    <button className="settings-button" onClick={this.showMenu}>
                        <i className="fas fa-cog"></i>
                    </button>

                    {this.state.showMenu
                        ? (
                            <div className="settings-dropdown" ref={(element) => { this.dropdownMenu = element }}>
                                {this.postSetting(post)}
                                <button onClick={() => this.props.deletePost(post.id)}>Delete</button>
                            </div>
                        )
                        : (null)
                    }
                </li>
            )
        } else {
            settings = (
                <li>
                    {likeBtn}
                </li>
                )
            };
            

        // let photoUrl;    
        // if (this.props.post.author.photoUrl) {
        //     photoUrl = <Avatar photoUrl={this.props.post.author.photoUrl} className="avatar"/>
        // } else {
        //     photoUrl = <img className="post-avatar" src={window.brentURL}></img>
        // }
            
        return (
            <div>
                {/* {photoUrl} */}
                <div className="explore post-container">
                    <div className="post-author-container">
                        {author.username}
                        {/* <button onClick={() => this.props.follow(author.id)}>Follow</button>
                        <button onClick={() => this.props.unfollow(author.id)}>Unfollow</button> */}
                        {follow}
                    </div>
                    <div className="post-body-container">
                        {this.postBody(post)}
                    </div>
                    <div className="post-action-container">
                        {notes}
                        <ul className="post-action-actions">
                            {settings} 
                        </ul>
                    </div>
                </div>
            </div>
        )
    };
}

export default PostIndexItem;