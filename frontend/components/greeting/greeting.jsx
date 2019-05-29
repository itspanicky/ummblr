import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    if (currentUser) {
        return (
            <>
                <h2>Tempt - you signed in {currentUser.username}!</h2>
                <button onClick={() => logout()}>Logout</button>
            </>
        );
    } else {
        return (
            <>
                <h1 className="ummblr">ummblr</h1>
                <nav className="signup-login">
                    <Link className="signup-link" to='/signup'>Get Started</Link>
                    <Link className="login-link" to='/login'>Log In</Link>
                </nav>
            </>
        );
    }



}

export default Greeting;