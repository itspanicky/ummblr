import React from 'react';

let follow = (props) => {
    debugger
    if (props.currentUser) {
        debugger
        if (!props.currentUser.followings.includes(props.post.author.id)) {
            debugger
            return <button className="follow-button" onClick={() => props.follow(props.post.author.id)}>Follow</button>
        } else {
            return <button className="follow-button" onClick={() => props.unfollow(props.post.author.id)}>Unfollow</button>
        }
    }
}

let postBody = (props) => {
    switch (props.post.post_type) {
        case "text":
            return (
                <div className="text-post">
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
                <div className="quote-post">
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
    debugger
    return (
        <div className="explore-index-item-container">
            <div className="post-author-container">
                {props.post.author.username}
                {follow(props)}
            </div>
            <div className="post-body-container">
                {postBody(props)}
            </div>
            <div>
                <span>99 notes</span>
                <ul>
                    <li>Reblog</li>
                    <li>Like/unlike</li>
                </ul>
            </div>
        </div>
    )
    
}

export default ExploreIndexItem;