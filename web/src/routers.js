import React from 'react';
import { Route } from 'react-router';

import App from './components/App/App';
import Main from './components/Main/Main';
import LoginForm from './components/LoginForm/LoginForm';
import Statistics from './components/Statistics/Statistics';
import Users from './components/Users/Users';

export default function getRoutes(store) {
    const redirectIndex = (nextState, replace, sb) => {
        if (nextState.location.pathname === '/') {
            replace('/main/home');
        }
        sb();
    };
    return (
        <Route path="/" component={App} onEnter={redirectIndex}>
            <Route path="main/home" component={Main}/>
            <Route path="main/users" component={Users}/>
            <Route path="main/statistics" component={Statistics}/>
            <Route path="main/login" component={LoginForm}/>
        </Route>
    );
}