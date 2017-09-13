import React from 'react';
import './app.scss';

import HeaderContainer from '../../containers/headerContainer';

export default function App({ children }) {
    return (
        <div>
            <HeaderContainer/>
            <div className="content">
                {children}
            </div>
        </div>
    );
}