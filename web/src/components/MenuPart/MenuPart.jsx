import React, {Component} from "react";

export default class MenuPart extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {onClick, index} = this.props;
        onClick(index);
    }

    render() {
        const {isActive, title} = this.props;
        return (
            <li className={isActive ? 'active' : ''} onClick={this.handleClick}>
                <a href="#">{title}</a></li>
        )
    }
}