import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, Router } from 'react-router';

import 'reset-css';
import 'bootstrap-loader';

import configureStore from './store/configureStore';
import getRoutes from './routers';

import '../public/favicon/favicon.ico';

const store = configureStore(hashHistory);
const routers = (
    <Router history={hashHistory}>
        {getRoutes(store)}
    </Router>);

ReactDOM.render(<Provider store={store}>{routers}</Provider>, document.getElementById("app"));