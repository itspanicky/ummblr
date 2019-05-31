import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import DashboardContainer from './dashboard/dashboard_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal'

const App = () => {
    return(
        <div className="app">
            <Modal/>
            <header>
                {/* <GreetingContainer /> */}
            </header>
            
            <Switch>
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <ProtectedRoute path="/dashboard" component={DashboardContainer} />
                <AuthRoute exact path="/" component={GreetingContainer} />
            </Switch>

        </div>
    )
}

export default App;