import React, {Component} from "react";
import {Link} from "react-router";

export default class MenuPart extends Component {

    static propTypes = {
        index: React.PropTypes.number,
        title: React.PropTypes.string,
        isActive: React.PropTypes.bool,
        onClick: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {onClick, index} = this.props;
        onClick(index);
    }

    render() {
        const {isActive, title, url} = this.props;
        return (

            <li className={isActive ? 'active' : ''} onClick={this.handleClick}>
                <Link to={url}>{title}</Link></li>
        )
    }
}