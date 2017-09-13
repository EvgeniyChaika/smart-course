import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'reset-css';
import 'bootstrap-loader';

import configureStore from './store/configureStore';
import getRoutes from './routers';

import '../public/favicon/favicon.ico';

const store = configureStore(hashHistory);
const history = syncHistoryWithStore(hashHistory, store);

const routers = (
    <Router history={history}>
        {getRoutes(store)}
    </Router>);

ReactDOM.render(<Provider store={store}>{routers}</Provider>, document.getElementById("app"));