import React from 'react';
import Avatar from '../avatar/avatar';
import UserMini from '../avatar/user-mini';
import Comments from '../comments/comments';
import CommentForm from '../comments/comment_form_container';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu:  false,
            showCommentForm: false
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        this.showCommentForm = this.showCommentForm.bind(this);
        this.closeCommentForm = this.closeCommentForm.bind(this);

        this.handleFollow = this.handleFollow.bind(this);
    }
    
    showMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu)
        });
    }

    closeMenu(e) {
        if (this.dropdownMenu && !this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });  
        }
    }

    showCommentForm(e) {
        e.preventDefault();
        this.setState({ showCommentForm: true }, () => {
            document.addEventListener('click', this.closeCommentForm)
        });
    }

    closeCommentForm(e) {
        if (this.dropdownCommentForm && !this.dropdownCommentForm.contains(event.target)) {
            this.setState({ showCommentForm: false }, () => {
                document.removeEventListener('click', this.closeCommentForm);
            });
        }
    }

    postBody(post){
        if (post.reblog_post_id && post.reblog_description) {
            let reblogDescription = post.reblog_description ? 
                <div className="reblog-container">
                    <p className="content-author-name">{post.author.username}:</p>
                    <p className="content-post">{post.reblog_description}</p>
                </div> : <span></span>
                
            let reblogContents = [];
            let originalPost = this.props.originalPost;
            let firstPost = post;

            if (!originalPost) {
                return (
                    <div className="text-post">
                        <h3 className="content-post">Original post removed</h3>
                        {reblogDescription}
                    </div>
                )
            } else {
                while (originalPost && originalPost.reblog_post_id) {
                    if (originalPost.reblog_description) reblogContents.push([originalPost.author.username, originalPost.reblog_description]);
                    originalPost = this.props.posts[originalPost.reblog_post_id];
                } 
            }
            
            while (firstPost && firstPost.reblog_post_id != null) {
                firstPost = this.props.posts[firstPost.reblog_post_id]
            };
            const firstPhoto = firstPost ? <img className="photo-post" src={firstPost.photoUrl} /> : <p className="content-post">Post Removed</p>
            const firstAuthor = firstPost ? firstPost.author.username : "removed"
            const firstAuthorName = post.content ? <p className="content-author-name">{firstAuthor}:</p> : <span></span>
            
            let contents = reblogContents.map(content => {
                return (
                <div className="reblog-container" key={content[1]}>
                    <p className="content-author-name">{content[0]}:</p>
                    <p className="content-post">{content[1]}</p>
                </div>
                )
            })
            
            switch (post.post_type) {
                case "text":
                    return (
                        <div className="text-post">
                            <h3>{post.title}</h3>
                            <div>
                                {firstAuthorName}
                                <p className="content-post">{post.content}</p>
                            </div>
                            {contents}
                            {reblogDescription}
                        </div>
                    );
                case "photo":
                    return (
                        <div>
                            {firstPhoto}
                            {firstAuthorName}
                            <p className="content-post">{post.content}</p>
                            {contents}
                            {reblogDescription}
                        </div>
                    )
                case "quote":
                    return (
                        <div className="quote-post">
                            <h3>&ldquo;{post.title}&rdquo;</h3>
                            <p className="content-post"><span>-</span> {post.content}</p>
                            {contents}
                            {reblogDescription}
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
                            <h3 className="link-post"><a href={link}>{post.title}</a></h3>
                            {firstAuthorName}
                            <p className="content-post">{post.content}</p>
                            {contents}
                            {reblogDescription}
                        </div>
                    )
            }
        }
        else {
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
        let originalPost;
        let reblogSymbol;
        let originalAuthor;
        if (this.props.originalPost) {
            originalPost = this.props.originalPost;
            reblogSymbol = <i className="fas fa-retweet"></i>;
            originalAuthor = < UserMini
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentUser={this.props.currentUser}
                otherUser={originalPost.author}
            />
        }

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
                <i className="fas fa-heart unclicked post-index-like"></i>
            </button>
            :
            <button onClick={() => this.props.unlikePost(post.id)}>
                <i className="fas fa-heart clicked post-index-like"></i>
            </button> ;

        const comments = <Comments comments={this.props.comments} users={this.props.users} />
        let notes = <div></div>;
        let likers = post.likers.length;
        let reblogs = this.props.reblogs;
        let notesTotal = likers + reblogs.length + this.props.comments.length;

        if (notesTotal > 0) {
            notes = (
                <div className="">
                    <ul className="notes"><p className="note">{`${notesTotal} ${notesTotal === 1 ? "note" : "notes"}`}</p>
                        <ul className="notes-dropdown">
                            <li className="notes-info">{`${likers} ${likers === 1 ? "like" : "likes"} and ${reblogs.length} ${reblogs.length === 1 ? "reblog" : "reblogs"}`}</li>
                            {comments}
                        </ul>
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
                    <button className="" onClick={this.showCommentForm}>
                        <i className="fas fa-comments"></i>
                    </button>

                    {this.state.showCommentForm
                        ? (
                            <div className="comments-dropdown" ref={(element) => { this.dropdownCommentForm = element }}>
                                {<CommentForm postId={this.props.post.id} />}
                                <ul>{comments}</ul>
                            </div>
                        )
                        : (null) 
                    }
                    <i className="fas fa-retweet" onClick={() => this.props.openModal('Create Reblog', this.props.post.id)}></i>
                    {likeBtn}
                </li>
                )
            };
            

        let photoUrl;    
        if (this.props.post.author.photoUrl) {
            
            photoUrl = 
                <Avatar 
                    photoUrl={this.props.post.author.photoUrl} 
                    klass={"author-avatar"}
                    user={this.props.post.author}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    currentUser={currentUser}
                />
        } else {
            photoUrl = <img className="author-avatar" src={window.brentURL}></img>
        }
        
        return (
            <div className="post-index-item-container">
                {photoUrl}
                <div className="explore post-container">
                    <div className="post-author-container">
                        < UserMini
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            currentUser={this.props.currentUser}
                            otherUser={author}
                        /> {reblogSymbol} {originalAuthor}
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