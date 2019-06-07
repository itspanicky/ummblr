import React from 'react';

const Avatar = ({ photoUrl, currentUser }) => (
    <div className="user-avatar">
        <img className="avatar" src={photoUrl} alt=""/>
        <ul className="user-popup"> 
            <li>{currentUser}</li>
        </ul>
    </div>
)

export default Avatar;