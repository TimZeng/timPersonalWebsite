import React, { Component } from 'react';

import Header from './Header';
import Features from './Features';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
      </div>
    );
  }
}
