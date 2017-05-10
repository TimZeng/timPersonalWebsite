import React, { Component } from 'react';

import $ from 'jquery';

class Header extends Component {
  scroll(element) {
    $('html, body').animate({ scrollTop: $(element).offset().top - 77 }, 1000);
  }

  render() {
    return (
      <header>
        <div className="hero-text-box">
          <h1>{this.props.text1}</h1>
          <h4>{this.props.text2}</h4>
        </div>
      </header>
    );
  }
}

export default Header;
      // <p style={{ color: '#fff' }}>
        // &nbsp; &nbsp; &nbsp; &nbsp;
        // <i className='ion-location' />
        // &nbsp; &nbsp;San Francisco Bay Area
      // </p>
