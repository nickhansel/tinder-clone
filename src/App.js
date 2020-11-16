import React, { Component } from "react";
import { GlobalStyle } from "utils";
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Router />
      </div>
    );
  }
}

export default App;
