import React from 'react';

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
    debugger
    switch (props.post.post_type) {
        case "text":
            return (
                <div className="explore text-post">
                    <h3>{props.post.title}</h3>
                    <p className="content-post">{props.post.content}</p>
                </div>
            );
        case "photo":
            debugger
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
            if (post.title.includes("https://")) {
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

const ExploreIndexItem = (props) => {
    let notes = <div></div>;
    let likers = props.post.likers.length;
    if (likers > 0) {
        notes = (
            <div>
                <ul className="explore notes">{`${likers} ${likers === 1 ? "note" : "notes"}`}
                    <li className="notes-dropdown">
                    </li>
                </ul>
            </div>
        )
    } 

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
                {props.post.author.username}
                {follow(props)}
            </div>
            <div className="post-body-container">
                {postBody(props)}
            </div>
            <div className="explore post-action-container">
                {notes}
                <ul className="explore post-action-actions">
                    <li><i className="fas fa-retweet"></i></li>
                    <li>{likeBtn}</li>
                </ul>
            </div>
        </div>
    )
    
}

export default ExploreIndexItem;