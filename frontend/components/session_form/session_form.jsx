// form for sign up/ login

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AboutMe from '../greeting/about-me';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleDemo(e){
        e.preventDefault();
        this.props.processLogin({
            email: "demo@gmail.com",
            password: "password",
            username: "demo_user"
        });
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.props.match.path === '/login') {
            this.props.processLogin(this.state);
        } else {
            this.props.processSignup(this.state);
        }
    }

    handleInput(field){
        return e => this.setState({
            [field]: e.target.value
        });
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.clearSessionErrors();
    }

    render() {

        let backgroundImages = this.props.posts.slice(0, 7).map(post => {
            if (post.post_type === "photo") {
                debugger
                return (
                    <>
                        <img className="background-image" src={post.photoUrl} />
                        <div className="background-image-author"><div>Posted by </div><p>{post.author.username}</p></div>
                    </>
                )
            }
        });

        // const backgroundImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
        const backgroundImage = backgroundImages[4];
        
        let userInput;
        let linkTo;
        if (this.props.formType === "Sign Up") {
            userInput = ( <input 
                    className="user-input"
                    type="text" 
                    value={this.state.username} 
                    placeholder="Username" 
                    onChange={this.handleInput("username")} 
                /> 
            );
            linkTo = ( <Link className="link_to" to='/login'>Log in</Link> )
        } else {
            userInput = ( <span></span> );
            linkTo = ( <Link className="link_to" to='/signup'>Sign up</Link> )
        }

        let errors = this.props.errors.map(error => <li key={error}>{error}</li>)

        return (
            <div className="splash-container">
                {linkTo}
                {backgroundImage}
                <section className="left-side">
                    <Link to="/" className="u-logo">u</Link>
                    <input className="search-bar" type="text" placeholder="Search ummblr" />
                </section>
                <div className="form-box">
                <h1 className="ummblr">ummblr</h1>
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <input 
                            className="email-input" 
                            type="text" 
                            value={this.state.email} 
                            placeholder="Email" 
                            onChange={this.handleInput("email")
                        }/>

                        {userInput}
                        {/* <input type="text" value={this.state.username} onChange={this.handleInput("username")} /> */}
                        <input 
                            className="password-input" 
                            type="password"
                            value={this.state.password}
                            placeholder="Password" 
                            onChange={this.handleInput("password")}/>

                        <ul className="errors">
                            {errors}
                        </ul>

                        <input type="submit" value={this.props.formType}/>
                        <button onClick={this.handleDemo}>Demo Login</button>
                    </form>
                </div>
                <AboutMe />
            </div>
        )
    }


}


export default withRouter(SessionForm);