import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container'
import AboutMe from './about-me';

const Greeting = ({currentUser}) => {
    if (currentUser) {
        return (
            <>
            </>
        );
    } else {
        return (
            <div className="splash-container">
                <Navbar />
                <nav className="signup-login">
                    <h1 className="ummblr">ummblr</h1>
                    <div className="spash-motto">
                        <p className="splash-text" >Come for what you love</p>
                        <p className="splash-text" >umms for what you discover</p>
                    </div>
                    <Link className="signup-link" to='/signup'>Get Started</Link>
                    <Link className="login-link" to='/login'>Log In</Link>
                    {/* <Link className="splash-text" to='/explore'>See what's trending</Link> */}
                </nav>
                <AboutMe/>
            </div>
        );
    }
}

export default Greeting;