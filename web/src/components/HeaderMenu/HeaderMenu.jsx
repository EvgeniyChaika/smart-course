import React from 'react';
import {Link} from 'react-router-dom';

import "./headerMenu.scss";
import "../MenuPart/MenuPart";
import MenuPart from "../MenuPart/MenuPart";
import menu from "../../constants/headerMenu";

export default class HeaderMenu extends React.Component {

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
                        <a className="navbar-brand" href="#">Smart Course</a>
                    </div>
                    <ul className="nav navbar-nav">
                        {menu.map(content =>
                            <MenuPart key={content.index}
                                      index={content.index}
                                      title={content.title}
                                      isActive={activeIndex === content.index}
                                      onClick={this.click}
                            />
                        )}
                    </ul>
                    <ul className="nav navbar-nav pull-right">
                        <Link to="/login" r className="navbar-nav pull-right"><li>Login</li></Link>
                    </ul>
                </div>
            </nav>
        );
    }
}