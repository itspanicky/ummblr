import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container'

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
                        <p>Come for what you love.</p>
                        <p>umms for what you discover.</p>
                    </div>
                    <Link className="signup-link" to='/signup'>Get Started</Link>
                    <Link className="login-link" to='/login'>Log In</Link>
                </nav>
            </div>
        );
    }
}

export default Greeting;