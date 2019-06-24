import React from 'react';

const Avatar = ({ photoUrl, user, klass }) => (
    <div className="user-avatar">
        <img className={klass} src={photoUrl} alt=""/>
        <ul className="user-popup"> 
            <li>{user}</li>
        </ul>
    </div>
)

export default Avatar;