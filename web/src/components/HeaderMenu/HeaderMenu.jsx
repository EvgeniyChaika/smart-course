import React, {Component} from "react";
import "./headerMenu.scss";

export default class HeaderMenu extends Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="collapse navbar-collapse">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Receipts Manager</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="#">Receipts</a></li>
                        <li><a href="#">Internet</a></li>
                        <li><a href="#">Gas</a></li>
                        <li><a href="#">Water</a></li>
                        <li><a href="#">Phone</a></li>
                    </ul>
                    <ul className="nav navbar-nav pull-right">
                        <li><a href="#contact" className="navbar-nav pull-right">Logout</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}