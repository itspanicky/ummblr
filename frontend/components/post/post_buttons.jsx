import React from 'react';

const PostButtons = () => {

    return (
        <>
            <ul className="post_buttons">
                <li>
                    <p><i className="post_button fas fa-font grow"></i><span>Text</span></p>
                </li>
                <li>
                    <p><i className="post_button fas fa-camera grow"></i><span>Photo</span></p>
                </li>
                <li>
                    <p><i className="post_button fas fa-quote-right grow"></i><span>Quote</span></p>
                </li>
                <li>
                    <p><i className="post_button fas fa-link grow"></i><span>Link</span></p>
                </li>
            </ul>
        </>
    )
}

export default PostButtons;