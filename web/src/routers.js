import React from 'react';
import { Route } from 'react-router';
import App from './components/App/App';
import Main from './components/Main/Main';
import LoginForm from './components/LoginForm/LoginForm';

export default function getRoutes(store) {
    const redirectIndex = (nextState, replace, sb) => {
        if (nextState.location.pathname === '/') {
            replace('/main/home');
        }
        sb();
    };
    return (
        <Route path="/" component={App} onEnter={redirectIndex}>
            <Route path="main">
                <Route path="home" component={Main}/>
            </Route>
            <Route path="login" component={LoginForm}/>
        </Route>
    );
}