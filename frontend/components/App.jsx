import React from 'react';
import GreetingContainer from './greeting_container';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => {
    return(
        <div>
            <header>
                <h1>ummblr main page</h1>
                <GreetingContainer />
            </header>

            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />

        </div>
    )
}

export default App;