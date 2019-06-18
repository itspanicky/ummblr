import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, logout}) => {
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
                        <p><i className="small fas fa-heart"></i><span>Likes</span></p>
                    </li>
                    <li>
                        <p><i className="small fas fa-child"></i><span>Following</span></p>
                    </li>
                    <li>
                        <p><i className="small fas fa-cog"></i><span>Settings</span></p>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/"><i className="big fas fa-edit"></i></Link>
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
            <nav className="navbar">
                {leftNav}
            </nav>
        )
    }
}

export default Navbar;