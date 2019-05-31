import React from 'react';

const PostNav = ({ currentUser, openModal }) => {

    return (
        <>
            <ul className="post_buttons">
                <li>
                    <div onClick={ () => openModal('Text Form') }><p className="post_button text">Aa</p><span>Text</span></div>
                </li>
                <li>
                    <div><i className="post_button fas fa-camera"></i><span>Photo</span></div>
                </li>
                <li>
                    <div><i className="post_button fas fa-quote-right"></i><span>Quote</span></div>
                </li>
                <li>
                    <div><i className="post_button fas fa-link"></i><span>Link</span></div>
                </li>
            </ul>
        </>
    )
}

export default PostNav;