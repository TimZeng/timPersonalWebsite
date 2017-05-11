import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Nav from './nav';
import Footer from './footer';
import Overlay from './overlay';
import Contact from './contact';
import ImgDisplay from './imgDisplay';

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
        <Overlay>
          <Contact
            img='tagme-3'
          />
        </Overlay>

      </div>
    );
  }
}
