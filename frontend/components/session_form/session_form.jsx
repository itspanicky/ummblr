// form for sign up/ login

import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state);
    }

    handleInput(field){
        return e => this.setState({
            [field]: e.target.value
        });
    }

    render() {
        const userInput = (this.props.formType === "Sign Up" ? <input type="text" value={this.state.username} placeholder="Username" onChange={this.handleInput("username")} /> : <span></span> )
        let errors = this.props.errors.map(error => <li key={error}>{error}</li>)

        return (
            <>
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
                </form>
            </div>
            </>
        )
    }


}

export default SessionForm;