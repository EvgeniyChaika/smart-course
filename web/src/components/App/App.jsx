import React from 'react';
import './app.scss';

import HeaderMenu from '../HeaderMenu/HeaderMenu';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <HeaderMenu/>
            </div>
        );
    }
}