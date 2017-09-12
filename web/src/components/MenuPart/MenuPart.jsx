import React from 'react';
import PropTypes from 'prop-types';

import './menuPart.scss';
import { Link } from 'react-router-dom';

const MenuPart = props => {
    const { stateIndex, title, index, icon, url, onClickButton } = props;
    const isActive = stateIndex === index;
    return (
        <li className={isActive ? 'active' : ''} onClick={() => onClickButton(index)}>
            <Link to={url}><span className={`glyphicon glyphicon-${icon}${isActive ? ' active-icon' : ''}`}/>{title}
            </Link>
        </li>
    );
};

MenuPart.propTypes = {
    index: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    stateIndex: PropTypes.number.isRequired,
    onClickButton: PropTypes.func.isRequired
};

export default MenuPart;