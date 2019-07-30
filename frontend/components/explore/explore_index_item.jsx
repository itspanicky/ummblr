import React, { useState, useEffect } from 'react';
import UserMini from '../avatar/user-mini';
import Comments from '../comments/comments';
import CommentForm from '../comments/comment_form_container';

let follow = (props) => {
    if (props.currentUser) {
        if (!props.currentUser.followings.includes(props.post.author.id)) {
    
            return <button className="follow-button" onClick={() => props.follow(props.post.author.id)}>Follow</button>
        } else {
            return <button className="follow-button" onClick={() => props.unfollow(props.post.author.id)}>Unfollow</button>
        }
    }
}

let postBody = (props) => {
    if (props.post.reblog_post_id) {
        let reblogDescription = props.post.reblog_description ?
            <div className="reblog-container">
                <p className="content-author-name">{props.post.author.username}:</p>
                <p className="content-post">{props.post.reblog_description}</p>
            </div> : <span></span>
        
        let firstPost = props.post;
        let originalPost = props.originalPost;
        let reblogContents = [];

        while (firstPost && firstPost.reblog_post_id != null) {
            firstPost = props.allPosts[firstPost.reblog_post_id]
        };
        
        const firstPhoto = firstPost ? <img className="photo-post" src={firstPost.photoUrl} /> : <p className="content-post">Post Removed</p>
        const firstAuthor = firstPost ? firstPost.author.username : "removed"
        const firstAuthorName = props.post.content ? <p className="content-author-name">{firstAuthor}:</p> : <span></span>
        
        while (originalPost && originalPost.reblog_post_id) {
            if (originalPost.reblog_description) reblogContents.push([originalPost.author.username, originalPost.reblog_description]);
            originalPost = props.allPosts[originalPost.reblog_post_id];
        } 

        let contents = reblogContents.map(content => {
            return (
                <div className="reblog-container" key={content[1]}>
                    <p className="content-author-name">{content[0]}:</p>
                    <p className="content-post">{content[1]}</p>
                </div>
            )
        })
            
        switch (props.post.post_type) {
            case "text":
                return (
                    <div className="explore text-post">
                        <h3>{props.post.title}</h3>
                        <div>
                            {firstAuthorName}
                            <p className="content-post">{props.post.content}</p>
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
                        <p className="content-post">{props.post.content}</p>
                        {contents}
                        {reblogDescription}
                    </div>
                )
            case "quote":
                return (
                    <div className="explore quote-post">
                        <h3>&ldquo;{props.post.title}&rdquo;</h3>
                        <p className="content-post"><span>-</span> {props.post.content}</p>
                        {contents}
                        {reblogDescription}
                    </div>
                )
            case "link":
                let link;
                if (props.post.title.includes("https://")) {
                    link = props.post.title
                } else {
                    link = "http://" + props.post.title;
                }

                return (
                    <div className="text-post">
                        <h3 className="link-post"><a href={link}>{props.post.title}</a></h3>
                        {firstAuthorName}
                        <p className="content-post">{props.post.content}</p>
                        {contents}
                        {reblogDescription}
                    </div>
                )
        }
    }
    else {
        switch (props.post.post_type) {
            case "text":
                return (
                    <div className="explore text-post">
                        <h3>{props.post.title}</h3>
                        <p className="content-post">{props.post.content}</p>
                    </div>
                );
            case "photo":
                return (
                    <div>
                        <img className="photo-post" src={props.post.photoUrl} />
                        <p className="content-post">{props.post.content}</p>
                    </div>
                )
            case "quote":
                return (
                    <div className="explore quote-post">
                        <h3>&ldquo;{props.post.title}&rdquo;</h3>
                        <p className="content-post"><span>-</span> {props.post.content}</p>
                    </div>
                )
            case "link":
                let link;
                if (props.post.title.includes("https://")) {
                    link = props.post.title
                } else {
                    link = "http://" + props.post.title;
                }

                return (
                    <div className="text-post">
                        <h3 className="link-post"><a href={link}>{props.post.title}</a></h3>
                        <p className="content-post">{props.post.content}</p>
                    </div>
                )
        }
    }
}

const ExploreIndexItem = (props) => {
    const [ commentForm, setCommentForm ] = useState(false);

    function showCommentForm(e) {
        e.preventDefault();
        setCommentForm(true) 
        useEffect(() => {
            document.addEventListener('click', closeCommentForm)
        }, []);
    }

    function closeCommentForm(e) {
        if (dropdownCommentForm && !dropdownCommentForm.contains(event.target)) {
            setCommentForm(false)
            useEffect(() => {
                document.removeEventListener('click', closeCommentForm);
            });
        }
    }

    let originalPost;
    let originalAuthor;
    if (props.originalPost && props.originalPost.type !== "span") {
        
        originalPost = props.originalPost;
        originalAuthor = 
            <>
                <span> </span>
                <i className="fas fa-retweet"></i>
                <span> </span>
                {/* {originalPost.author.username} */}
                < UserMini
                    follow={props.follow}
                    unfollow={props.unfollow}
                    currentUser={props.currentUser}
                    otherUser={originalPost.author}
                />

            </>;
    }
    

    let notes = <div></div>;
    let likers = props.post.likers.length;
    let commentsArr = Object.values(props.post.comments);
    let comments = <Comments comments={commentsArr} users={props.users} />
    let reblogs = props.postsArray.filter(post => post.reblog_post_id === props.post.id);
    let notesTotal = likers + reblogs.length + props.post.comments.length;

    if (notesTotal > 0) {
        notes = (
            <div className="">
                <ul className="notes"><p className="note">{`${notesTotal} ${notesTotal === 1 ? "note" : "notes"}`}</p>
                    <ul className="notes-dropdown">
                        <li className="notes-info">{`${likers} ${likers === 1 ? "like" : "likes"} and ${reblogs.length} ${reblogs.length === 1 ? "reblog" : "reblogs"}`}</li>
                        <li>{comments}</li>
                    </ul>
                </ul>
            </div>
        )
    } 

    let commentBtn = (
        <li>
            <button className="" onClick={showCommentForm}>
                <i className="fas fa-comments"></i>
            </button>

            {commentForm
                ? (
                    <div className="comments-dropdown" ref={(element) => { const dropdownCommentForm = element }}>
                        {<CommentForm postId={props.post.id} />}
                        <ul>{comments}</ul>
                    </div>
                )
                : (null)
            }
        </li>
    )
    
    let likeBtn = !props.post.likers.includes(props.currentUser.id) ?
        <button className="like-btn" onClick={() => props.likePost(props.post.id, props.currentUser.id)}>
            <i className="fas fa-heart unclicked"></i>
        </button>
        :
        <button onClick={() => props.unlikePost(props.post.id)}>
            <i className="fas fa-heart clicked"></i>
        </button>;

    return (
        <div className="explore-index-item-container">
            <div className="explore post-author-container">
                {/* {props.post.author.username} */}
                < UserMini
                    follow={props.follow}
                    unfollow={props.unfollow}
                    currentUser={props.currentUser}
                    otherUser={props.post.author}
                    />
                {follow(props)}
                <div className="explore-reblog-author">{originalAuthor}</div>
            </div>
            <div className="post-body-container">
                {postBody(props)}
            </div>
            <div className="explore post-action-container">
                {notes}
                <ul className="explore post-action-actions">
                    {/* {commentBtn} */}
                    <li><i className="fas fa-retweet" onClick={() => props.openModal('Create Reblog', props.post.id)}></i></li>
                    <li>{likeBtn}</li>
                </ul>
            </div>
        </div>
    )
    
}

export default ExploreIndexItem;