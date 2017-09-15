import React from 'react';
import PropTypes from 'prop-types';

import './headerMenu.scss';
import MenuPart from '../MenuPart/MenuPart';
import { authenticationMenu, headerMenu, logoutMenu, title } from '../../data/headerMenu';

const HeaderMenu = props => {
    const { activeIndex, activeButton, isAuthenticated, logoutUser } = props;
    return (
        <nav className="navbar navbar-default">
            <div className="collapse navbar-collapse">
                <div className="navbar-header">
                    <span className="navbar-brand header-title">{title}</span>
                </div>
                <ul className="nav navbar-nav">
                    {headerMenu.map(content =>
                        <MenuPart key={content.index}
                                  index={content.index}
                                  url={content.url}
                                  title={content.title}
                                  icon={content.icon}
                                  stateIndex={activeIndex}
                                  onClickButton={activeButton}
                        />
                    )}
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    {isAuthenticated ?
                        <MenuPart index={logoutMenu.index}
                                  url={logoutMenu.url}
                                  title={logoutMenu.title}
                                  icon={logoutMenu.icon}
                                  onClickButton={logoutUser}
                        />
                        :
                        authenticationMenu.map(content =>
                            <MenuPart key={content.index}
                                      index={content.index}
                                      url={content.url}
                                      title={content.title}
                                      icon={content.icon}
                                      stateIndex={activeIndex}
                                      onClickButton={activeButton}
                            />
                        )}
                </ul>
            </div>
        </nav>
    );
};

HeaderMenu.propTypes = {
    activeIndex: PropTypes.number.isRequired,
    activeButton: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired
};

export default HeaderMenu;