import React from 'react';
import PropTypes from 'prop-types';

import './menuPart.scss';

const MenuPart = props => {
    const { stateIndex, title, index, icon, onClickButton } = props;
    const isActive = stateIndex === index;
    return (
        <li className={isActive ? 'active' : ''} onClick={() => onClickButton(index)}>
            <a href="#"><i className={`material-icons${isActive ? ' brown600' : ''}`}>{icon}</i>{title}</a>
        </li>
    );
};

MenuPart.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    stateIndex: PropTypes.number.isRequired,
    onClickButton: PropTypes.func.isRequired
};

export default MenuPart;