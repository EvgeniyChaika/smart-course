import React from 'react';
import PropTypes from 'prop-types';

const MenuPart = props => {
    const { isActive, title, index, icon, onClickButton } = props;
    return (
        <li className={isActive === index ? 'active' : ''} onClick={() => onClickButton(index)}>
            <a href="#"><i className="material-icons">{icon}</i>{title}</a>
        </li>
    );
};

MenuPart.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isActive: PropTypes.number.isRequired,
    onClickButton: PropTypes.func.isRequired
};

export default MenuPart;