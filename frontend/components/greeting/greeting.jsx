import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container'
import AboutMe from './about-me';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {

        let backgroundImages = this.props.posts.slice(0, 7).map(post => {
            if (post.post_type === "photo") {
                return (
                    <>
                        <img className="background-image" src={post.photoUrl}/>
                        <div className="background-image-author"><div>Posted by </div><p>{post.author.username}</p></div>
                    </>
                )
            }
        });

        const backgroundImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
       
        return (
            <div className="splash-container">
                <Navbar />
                {backgroundImage}
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
                <AboutMe />
            </div>
        );
    }
}

export default Greeting;