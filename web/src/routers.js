import React from "react";
import {Route} from "react-router";
import Gas from "./components/Gas/Gas";
import Phone from "./components/Phone/Phone";
import Water from "./components/Water/Water";
import Internet from "./components/Internet/Internet";
import App from "./components/App/App";
import Main from "./components/Main/Main";
import Receipts from "./components/Receipts/Receipts";

export default function getRoutes() {
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
                <Route path="receipts" component={Receipts}/>
                <Route path="internet" component={Internet}/>
                <Route path="gas" component={Gas}/>
                <Route path="water" component={Water}/>
                <Route path="phone" component={Phone}/>
            </Route>
        </Route>
    );
}