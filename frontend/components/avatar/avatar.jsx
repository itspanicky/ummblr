import React from 'react';

const Avatar = ({ photoUrl, user, klass, otherUser, follow, unfollow, currentUser }) => {
    
    // let followBtn;
    // if (user.username === currentUser.username) {
    //     follow = <span></span>
    // } else if (currentUser.followings.includes(user.id)) {
    //     follow = <button className="follow-button" onClick={() => unfollow(user.id)}>Unfollow</ button>
    // } else {
    //     follow = <button className="follow-button" onClick={() => follow(user.id)}>Follow</ button>
    // };

    return (
        <div className="user-avatar">
            <img className={klass} src={photoUrl} alt=""/>
            {/* <ul className="user-hover">
                <li className="user-hover-dropdown">
                    <div className="user-dropdown-top"><div className="user-dropdown-info">{user.username} {followBtn}</div></div>
                </li>
            </ul> */}
        </div>
    )
    
}

export default Avatar;