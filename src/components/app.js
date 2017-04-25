import React, { Component } from 'react';

// import Header from './Header';
// import Features from './Features';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>this is app</h2>
        {this.props.children && React.cloneElement(this.props.children, {
          // this is where to pass props to all children components
          redirect: this.redirect,
        })}
      </div>
    );
  }
}
