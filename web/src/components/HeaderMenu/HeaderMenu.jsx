import React from 'react';

import './headerMenu.scss';
import '../MenuPart/MenuPart';
import MenuPart from '../MenuPart/MenuPart';
import menu from '../../constants/headerMenu';

export default function HeaderMenu(props) {
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
                                  isActive={props.activeIndex}
                                  onClickButton={props.activeButton}
                        />
                    )}
                </ul>
            </div>
        </nav>
    );

}