import React from "react";
import ReactDOM from "react-dom";
import "reset-css";
import "bootstrap-loader";
import getRoute from "./routers";

import "./images/favicon/favicon.ico";
import {hashHistory, Router} from "react-router";

const routers = (
    <Router history={hashHistory}>{getRoute()}</Router>
);


ReactDOM.render(routers, document.getElementById('root'));