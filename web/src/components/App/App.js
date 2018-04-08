import React from 'react';
import './app.scss';

import HeaderContainer from '../../containers/headerContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
      </div>
    );
  }
}
