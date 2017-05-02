import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Nav from './nav';
import Footer from './footer';
import Contact from './contact';

export default class App extends Component {
  redirect(pageTo) {
    browserHistory.push('/' + pageTo);
  }

  render() {
    return (
      <div>
        <Nav redirect={this.redirect} />
        <div className='content'>
          {this.props.children && React.cloneElement(this.props.children, {
            // this is where to pass props to all children components
            redirect: this.redirect,
          })}
        </div>
        <Footer />

      </div>
    );
  }
}
        // <Contact />
