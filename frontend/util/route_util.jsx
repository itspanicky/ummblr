import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// frontend Auth: protect your routes
// if not logged in, redirect
const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);

const msp = state => {
    // state is the react state with access to:
    // entities --> users
    // errors --> session
    // session --> user.id
    return ({
        loggedIn: Boolean(state.session.id)
    });
};


export const AuthRoute = withRouter(connect(msp, null)(Auth))
// withRouter wraps a react component and 
    // passes it the router props location, match, history