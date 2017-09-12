import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import App from './components/App/App';
import Main from './components/Main/Main';
import LoginForm from './components/LoginForm/LoginForm';

//TODO
export default function getRoutes(store) {
    const redirectIndex = (nextState, replace, sb) => {
        if (nextState.location.pathname === '/') {
            replace('/main/home');
        }
        sb();
    };
    return (
        <div>
            <Route path="/" component={App} onEnter={redirectIndex}/>
            <Route path="/main/home" component={Main}/>
            <Route path="/login" component={LoginForm}/>
            <Redirect from="/" to="/main/home"/>
        </div>
    );
}