import React, { Component } from 'react';

class Overlay extends Component {
  render() {
    return (
      <div id='overlay'>
        <div id='popup-window'>
          <div className='display animated fadeIn'>
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default Overlay;
          // <i className='ion-close-circled' />
