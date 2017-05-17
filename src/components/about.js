import React, { Component } from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';
import Waypoint from 'react-waypoint';

import { toggleOverlay } from '../actions';

class About extends Component {
  state = { animated: false };

  handleWaypointEnter() {
    $('.js--wp-1').addClass('animated fadeInUp');
    this.setState({ animated: true });
  }

  renderWaypoint() {
    if (!this.state.animated) {
      return (
        <Waypoint
          onEnter={this.handleWaypointEnter}
        />
      );
    }
  }

  render() {
    return (
      <section className="section-about js--section--about" id="about">

        <div className="row">
          <h2>About Me</h2>
          <p className="long-copy">
            I like building awesome software. I've built websites, iOS mobile apps, and even games!<br />At work, I always have:
          </p>

          <div className="row js--wp-1">
            <div className="col span-1-of-3 box">
              <i className="ion-ios-lightbulb-outline icon-big" />
              <h3>Autonomy</h3>
              <p>
                Took ownership of the product and constantly sought for improvements.
              </p>
            </div>

            <div className="col span-1-of-3 box">
              <i className="ion-ios-people-outline icon-big" />
              <h3>Team Work</h3>
              <p>
                Good communication with TEAM members as Together Everyone Achieves More.
              </p>
            </div>

            <div className="col span-1-of-3 box">
              <i className="ion-ios-list-outline icon-big" />
              <h3>Detail Orientation</h3>
              <p>
                Paying attention to details helped me learn new things and solve problems.
              </p>
            </div>

          </div>

          <p className="long-copy">
            When I am not working on my next project, I enjoy <br /><strong>traveling</strong>, watching <strong>movies</strong>, and playing <strong>video games</strong>
          </p>

          { this.renderWaypoint() }

          <p className="long-copy">
            Thinking about a new project idea or simply want to chat?<br />Send me a&nbsp;
            <i
              className='message'
              onClick={
                () => this.props.toggleOverlay({ overlay: true, component: 'contact' })
              }
            >message</i>
            &nbsp;or an&nbsp;
            <a href="mailto:zengtiantian1122@gmail.com">email</a>
          </p>

        </div>
      </section>
    );
  }
}

export default connect(null, { toggleOverlay })(About);
