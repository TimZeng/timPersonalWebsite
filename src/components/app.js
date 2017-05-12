import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Nav from './nav';
import Footer from './footer';
import Overlay from './overlay';
import Contact from './contact';
import ImgDisplay from './imgDisplay';

const images = [
  'madsweepers-1',
  'madsweepers-2',
  'madsweepers-3',
  'tagme-1',
  'tagme-2',
  'tagme-3',
  'oneupeldercare-1',
  'oneupeldercare-2',
  'peonygarden-1',
  'peonygarden-2',
  'peonygarden-3'
];

export default class App extends Component {
  state = {
    index: 0,
    overlay: false,
    component: ''
  }

  clickLeft() {
    const index = this.state.index;
    if (index === 0) {
      this.setState({ index: images.length - 1 });
    } else {
      this.setState({ index: index - 1 });
    }
  }

  clickRight() {
    const index = this.state.index;
    if (index === images.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: index + 1 });
    }
  }

  toggleOverlay(overlay, component, index = 0) {
    this.setState({ overlay, component, index });
  }

  redirect(pageTo) {
    browserHistory.push('/' + pageTo);
  }

  renderOverlay() {
    if (this.state.overlay) {
      if (this.state.component === 'ImgDisplay') {
        return (
          <Overlay>
            <ImgDisplay
              toggleOverlay={this.toggleOverlay.bind(this)}
              clickLeft={this.clickLeft.bind(this)}
              clickRight={this.clickRight.bind(this)}
              img={images[this.state.index]}
            />
          </Overlay>
        );
      }

      return (
        <Overlay>
          <Contact
            toggleOverlay={this.toggleOverlay.bind(this)}
          />
        </Overlay>
      );
    }
  }

  render() {
    return (
      <div>
        <Nav
          redirect={this.redirect}
          toggleOverlay={this.toggleOverlay.bind(this)}
        />
        <div className='content'>
          {this.props.children && React.cloneElement(this.props.children, {
            // this is where to pass props to all children components
            redirect: this.redirect,
            toggleOverlay: this.toggleOverlay.bind(this)
          })}
        </div>
        <Footer />

        {this.renderOverlay()}

      </div>
    );
  }
}
