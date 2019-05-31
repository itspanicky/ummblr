import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? <Redirect to="/" /> : <Component {...props} /> )}
    />
);

// const Protected = ({ component: Component, path, loggedIn }) => (
//     <Route path={path} exact={exact} render={(props) => (
//         loggedIn ? <Component {...props} /> : <Redirect to="/" /> )}
//     />
// );

const msp = state => {
    return ({
        loggedIn: Boolean(state.session.id)
    });
};


export const AuthRoute = withRouter(connect(msp, null)(Auth));
// export const ProtectedRoute = withRouter(connect(msp, null)(Protected));