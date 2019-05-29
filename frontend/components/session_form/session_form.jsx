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
        // const usernameInput = (this.props.formType === "Sign Up" ? <input type="text" value={this.state.username} onChange={this.handleInput("username")} /> : <span></span> )
        let errors = (this.props.errors.length > 1) ? this.props.errors.map(error => <li>{error}</li>) : null
        return (
            <>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.email} onChange={this.handleInput("email")}/>
                    
                    <input type="text" value={this.state.username} onChange={this.handleInput("username")} />
                    <input type="password" value={this.state.password} onChange={this.handleInput("password")}/>


                    <input type="submit" value={this.props.formType}/>
                </form>
                
                <ul className="errors">
                    {errors}
                </ul>
            </>
        )
    }


}

export default SessionForm;