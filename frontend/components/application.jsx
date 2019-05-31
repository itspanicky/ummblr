import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return(
        <div className="app">
            <header>
                {/* <GreetingContainer /> */}
            </header>

            {/* <AuthRoute exact path="/dashboard" component={GreetingContainer} /> */}
            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />

        </div>
    )
}

export default App;