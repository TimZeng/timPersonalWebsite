import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import Nav from './nav';
import Footer from './footer';
import Overlay from './overlay';
import Contact from './contact';
import ImgDisplay from './imgDisplay';
import Processing from './processing';

class App extends Component {
  redirect(pageTo) {
    browserHistory.push('/' + pageTo);
  }

  renderOverlay() {
    if (this.props.showOverlay) {
      if (this.props.overlayComponent === 'ImgDisplay') {
        return (
          <Overlay>
            <ImgDisplay />
          </Overlay>
        );
      }

      return (
        <Overlay>
          <Contact />
        </Overlay>
      );
    }
  }

  renderProcessing() {
    if (this.props.processing) {
      return <Processing />;
    }
  }

  render() {
    return (
      <div>
        <Nav
          redirect={this.redirect}
        />
        <div className='content'>
          {this.props.children && React.cloneElement(this.props.children, {
            // this is where to pass props to all children components
            redirect: this.redirect,
          })}
        </div>
        <Footer />

        {this.renderOverlay()}

        {this.renderProcessing()}

      </div>
    );
  }
}

const mapStateToProps = ({ showOverlay, overlayComponent, processing }) => (
  { showOverlay, overlayComponent, processing }
);

export default connect(mapStateToProps)(App);
