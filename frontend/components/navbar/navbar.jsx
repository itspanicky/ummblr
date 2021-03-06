import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, logout, openModal}) => {
    const user = (currentUser ? currentUser.username : 'Account')
    
    const leftNav = (
        <section className="left-side">
            <Link to="/" className="u-logo">u</Link>
            <i className="fas fa-search"></i>
            <input className="search-bar" type="text" placeholder="Search ummblr" />
        </section>
    )

    const rightNav = (
        <ul className="nav-list">
            <li>
                <Link to="/"><i className="big fas fa-home"></i></Link>
            </li>
            <li>
                <Link to="/explore"><i className="big fas fa-compass"></i></Link>
            </li>
            <li className="account">
                <p><i className="big fas fa-user"></i></p>
                <ul className="account-dropdown">
                    <li>
                        <div><span>{user}</span><span className="clickable" onClick={() => logout()}>Logout</span></div>
                    </li>
                    <li>
                        <Link to="/likes"><i className="small fas fa-heart"></i><span>Likes</span></Link>
                    </li>
                    <li>
                        <Link to="/following"><i className="small fas fa-child"></i><span>Following</span></Link>
                    </li>
                    {/* <li>
                        <p><i className="small fas fa-cog"></i><span>Settings</span></p>
                    </li> */}
                </ul>
            </li>
            <li>
                <i className="big fas fa-edit" onClick={() => openModal("alt-create-post")}></i>
            </li>
        </ul>
    )

    if (currentUser) {
        return (
            <nav className="navbar navbar-user">
                {leftNav}
                {rightNav}
            </nav>
        )
    } else {
        return (
            <nav className="navbar navbar-splash">
                {leftNav}
            </nav>
        )
    }
}

export default Navbar;