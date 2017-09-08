import React from "react";
import PropTypes from 'prop-types';

export default class MenuPart extends React.Component {

    static propTypes = {
        index: PropTypes.number,
        title: PropTypes.string,
        isActive: PropTypes.number,
        onClickButton: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {isActive, title, index} = this.props;
        console.log(isActive);
        console.log(index);
        return (
            <li className={isActive === index ? 'active' : ''} onClick={() => this.props.onClickButton(index)}>
                <a href="#">{title}</a></li>
        );
    }
}