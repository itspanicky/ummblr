import React from 'react';

const PostNav = ({ currentUser, openModal }) => {

    return (
        <>
            <ul className="post_buttons">
                <li>
                    <div onClick={ () => openModal('Create Text Form') }><p className="post_button text">Aa</p><span>Text</span></div>
                </li>
                <li>
                    <div onClick={() => openModal('Create Photo Form') }><i className="post_button fas fa-camera"></i><span>Photo</span></div>
                </li>
                <li>
                    <div onClick={() => openModal('Create Quote Form')}><i className="post_button fas fa-quote-right"></i><span>Quote</span></div>
                </li>
                <li>
                    <div onClick={() => openModal('Create Link Form')}><i className="post_button fas fa-link"></i><span>Link</span></div>
                </li>
            </ul>
        </>
    )
}

export default PostNav;