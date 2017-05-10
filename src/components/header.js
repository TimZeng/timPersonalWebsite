import React, { Component } from 'react';

import $ from 'jquery';
import Waypoint from 'react-waypoint';

class Header extends Component {
  handleWaypointEnter() {
    $('nav').removeClass('sticky animated fadeInDown');
  }

  handleWaypointLeave() {
    $('nav').addClass('sticky animated fadeInDown');
  }

  render() {
    return (
      <Waypoint
        onEnter={this.handleWaypointEnter}
        onLeave={this.handleWaypointLeave}
      >

        <header>
          <div className="hero-text-box">
            <h1>{this.props.text1}</h1>
            <h4>{this.props.text2}</h4>
          </div>
        </header>

      </Waypoint>

    );
  }
}

export default Header;
