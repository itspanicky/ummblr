import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const leftSide = (
        <section className="left-side">
            <button className="u-logo">u</button>
            <input className="search-bar" type="text" placeholder="Search ummblr" />
        </section>
    )
    if (currentUser) {
        return (
            <>
                <nav className="navbar">
                    {leftSide}

                    <ul className="nav-list">
                        <li>
                            <Link to="/"><i className="fas fa-home"></i></Link>
                        </li>
                        <li>
                            <Link to="/"><i className="fas fa-compass"></i></Link>
                        </li>
                        <li className="account">
                            <p><i className="fas fa-user"></i></p>
                            <ul className="account-dropdown">
                                <li>
                                    <p onClick={() => logout()}>Logout</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/"><i className="fas fa-edit"></i></Link>
                        </li>
                    </ul>
                </nav>
            </>
        );
    } else {
        return (
            <>
                {leftSide}
                <nav className="signup-login">
                    <h1 className="ummblr">ummblr</h1>
                    <Link className="signup-link" to='/signup'>Get Started</Link>
                    <Link className="login-link" to='/login'>Log In</Link>
                </nav>
            </>
        );
    }



}

export default Greeting;