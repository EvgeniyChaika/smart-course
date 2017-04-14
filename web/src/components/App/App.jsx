import React, {Component} from "react";
import "./app.scss";

import HeaderMenu from "../HeaderMenu/HeaderMenu";

export default class App extends Component {

    render() {
        const {children} = this.props;
        return (
            <div>
                <HeaderMenu/>
                <div>{children}</div>
            </div>
        )
    }
}