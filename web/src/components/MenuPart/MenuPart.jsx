import React from "react";
import PropTypes from 'prop-types';

export default class MenuPart extends React.Component {

    static propTypes = {
        index: PropTypes.number,
        title: PropTypes.string,
        isActive: PropTypes.bool,
        onClick: PropTypes.func
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
        const {isActive, title} = this.props;
        return (
            <li className={isActive ? 'active' : ''} onClick={this.handleClick}>
                <a href="#">{title}</a></li>
        )
    }
}