import React, { Component } from 'react';
import { GlobalStyle } from 'utils';
import Router from './Router';

class App extends Component {
  render() {
    console.log('this.props app');
    console.log(this.props);
    return (
      <div>
        <GlobalStyle />
        <Router />
      </div>
    );
  }
}

export default App;
