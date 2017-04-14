import React, {Component} from "react";
import {Link} from 'react-router';
import "./headerMenu.scss";
import "../MenuPart/MenuPart";
import MenuPart from "../MenuPart/MenuPart";
import menu from "../../content/menu";

export default class HeaderMenu extends Component {

    static propTypes = {
        activeIndex: React.PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
        this.click = this.click.bind(this);
    }

    click(index) {
        this.setState({
            activeIndex: index
        });
    }

    render() {
        const {activeIndex} = this.state;
        return (
            <nav className="navbar navbar-default">
                <div className="collapse navbar-collapse">
                    <div className="navbar-header">
                        <a className="navbar-brand">Receipts Manager</a>
                    </div>
                    <ul className="nav navbar-nav">
                        {menu.map(content =>
                                <MenuPart key={content.index}
                                          index={content.index}
                                          title={content.title}
                                          url={content.url}
                                          isActive={activeIndex === content.index}
                                          onClick={this.click}
                                />
                        )}
                    </ul>
                    <ul className="nav navbar-nav pull-right">
                        <li><Link to="/login" className="navbar-nav pull-right">Logout</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}