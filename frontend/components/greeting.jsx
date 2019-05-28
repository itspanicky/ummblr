import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    if (currentUser) {
        return (
            <>
                <h2>Tempt - you signed in!</h2>
            </>
        );
    } else {
        return (
            <>
                <h1>ummblr</h1>
                
                <Link to='/signup'>Get Started</Link>
                <Link to='/login'>Log In</Link>
            </>
        );
    }



}





export default Greeting;