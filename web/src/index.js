import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createHashHistory from 'history/createHashHistory';

import 'reset-css';
import 'bootstrap-loader';

import configureStore from './store/configureStore';
import getRoutes from './routers';

import '../public/favicon/favicon.ico';

const store = configureStore(createHashHistory());
const routers = (
    <Router history={createHashHistory()}>
        {getRoutes(store)}
    </Router>);

ReactDOM.render(<Provider store={store}>{routers}</Provider>, document.getElementById("app"));