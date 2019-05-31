import React from 'react';

const PostButtons = () => {

    return (
        <>
            <ul className="post_buttons">
                <li>
                    <p><div className="post_button text">Aa</div><span>Text</span></p>
                </li>
                <li>
                    <p><i className="post_button fas fa-camera"></i><span>Photo</span></p>
                </li>
                <li>
                    <p><i className="post_button fas fa-quote-right"></i><span>Quote</span></p>
                </li>
                <li>
                    <p><i className="post_button fas fa-link"></i><span>Link</span></p>
                </li>
            </ul>
        </>
    )
}

export default PostButtons;