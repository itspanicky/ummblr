import React from 'react';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import DashboardContainer from './dashboard/dashboard_container';
import ExploreContainer from './explore/explore_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import FollowingIndexContainer from './following_page/following_index_container';
import LikesIndexContainer from './likes_page/likes_index_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return(
        <div className="app">
            <Modal />
            <header>
                {/* <GreetingContainer /> */}
            </header>
            
            <Switch>
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <ProtectedRoute path="/dashboard" component={DashboardContainer} />
                <ProtectedRoute path="/explore" component={ExploreContainer} />
                <ProtectedRoute path="/following" component={FollowingIndexContainer} />
                <ProtectedRoute path="/likes" component={LikesIndexContainer} />
                <AuthRoute exact path="/" component={GreetingContainer} />
            </Switch>

        </div>
    )
}

export default App;