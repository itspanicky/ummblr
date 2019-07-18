import React from 'react';

const Comments = ({ comments, users }) => {

    let allComments = comments ? comments.map(comment => {
        const username = users[comment.author_id] ? users[comment.author_id].username : <span></span>

        return (
            <ul className="comment" key={comment.id}>
                <li className="comment-author">{`${username}:`}</li>
                <li className="comment-body">{comment.body}</li>
            </ul>
        )

    }) : <span></span>
    
    return (
        <div>
            <ul className="comments-container" >
                {allComments}
            </ul>
        </div>
    )
}

export default Comments;